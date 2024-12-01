import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import config from '../../amplify_outputs.json';
// Configure Amplify globally
Amplify.configure(config);
// Create a typed client for data operations
export var client = generateClient();
// Export typed models
export var models = {
    MarketingPlan: client.models.MarketingPlan,
    Artist: client.models.Artist,
    Review: client.models.Review
};
