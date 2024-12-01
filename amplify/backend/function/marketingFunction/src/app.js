const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const app = express();
const dynamodb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.STORAGE_MARKETINGPLANS_NAME;

app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Create Marketing Plan
app.post('/marketing-plans', async (req, res) => {
  try {
    const planId = uuidv4();
    const timestamp = new Date().toISOString();
    const userId = req.apiGateway.event.requestContext.identity.cognitoIdentityId;

    const item = {
      id: planId,
      userId: userId,
      createdAt: timestamp,
      updatedAt: timestamp,
      status: 'DRAFT',
      ...req.body
    };

    await dynamodb.put({
      TableName: TABLE_NAME,
      Item: item
    }).promise();

    res.json({ success: true, data: item });
  } catch (error) {
    console.error('Create error:', error);
    res.status(500).json({ error: 'Could not create marketing plan' });
  }
});

// List Marketing Plans
app.get('/marketing-plans', async (req, res) => {
  try {
    const userId = req.apiGateway.event.requestContext.identity.cognitoIdentityId;

    const result = await dynamodb.query({
      TableName: TABLE_NAME,
      KeyConditionExpression: 'userId = :userId',
      ExpressionAttributeValues: {
        ':userId': userId
      }
    }).promise();

    res.json({ success: true, data: result.Items });
  } catch (error) {
    console.error('List error:', error);
    res.status(500).json({ error: 'Could not list marketing plans' });
  }
});

// Get Single Plan
app.get('/marketing-plans/:id', async (req, res) => {
  try {
    const userId = req.apiGateway.event.requestContext.identity.cognitoIdentityId;
    const { id } = req.params;

    const result = await dynamodb.get({
      TableName: TABLE_NAME,
      Key: {
        id: id,
        userId: userId
      }
    }).promise();

    if (!result.Item) {
      return res.status(404).json({ error: 'Plan not found' });
    }

    res.json({ success: true, data: result.Item });
  } catch (error) {
    console.error('Get error:', error);
    res.status(500).json({ error: 'Could not retrieve marketing plan' });
  }
});

// Update Plan
app.put('/marketing-plans/:id', async (req, res) => {
  try {
    const userId = req.apiGateway.event.requestContext.identity.cognitoIdentityId;
    const { id } = req.params;
    const timestamp = new Date().toISOString();

    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: id,
        userId: userId
      },
      UpdateExpression: 'set updatedAt = :timestamp, goals = :goals, artist_name = :artist_name, genre = :genre, target_audience = :audience, budget = :budget, timeline = :timeline, status = :status',
      ExpressionAttributeValues: {
        ':timestamp': timestamp,
        ':goals': req.body.goals,
        ':artist_name': req.body.artist_name,
        ':genre': req.body.genre,
        ':audience': req.body.target_audience,
        ':budget': req.body.budget,
        ':timeline': req.body.timeline,
        ':status': req.body.status
      },
      ReturnValues: 'ALL_NEW'
    };

    const result = await dynamodb.update(params).promise();
    res.json({ success: true, data: result.Attributes });
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ error: 'Could not update marketing plan' });
  }
});

// Delete Plan
app.delete('/marketing-plans/:id', async (req, res) => {
  try {
    const userId = req.apiGateway.event.requestContext.identity.cognitoIdentityId;
    const { id } = req.params;

    await dynamodb.delete({
      TableName: TABLE_NAME,
      Key: {
        id: id,
        userId: userId
      }
    }).promise();

    res.json({ success: true, message: 'Plan deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Could not delete marketing plan' });
  }
});

app.listen(3000, function() {
  console.log("App started");
});

module.exports = app; 