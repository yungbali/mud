import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';
import config from '../../amplify_outputs.json';

// Configure Amplify globally
Amplify.configure(config);

// Create a typed client for data operations
export const client = generateClient<Schema>();

// Explicitly type the models
type AmplifyModels = {
  MarketingPlan: typeof client.models.MarketingPlan;
  Artist: typeof client.models.Artist;
  Review: typeof client.models.Review;
};

// Export typed models
export const models: AmplifyModels = {
  MarketingPlan: client.models.MarketingPlan,
  Artist: client.models.Artist,
  Review: client.models.Review
};