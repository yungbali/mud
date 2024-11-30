import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  Artist: a
    .model({
      name: a.string(),
      genre: a.string(),
      targetAudience: a.string(),
      followers: a.integer(),
      monthlyStreams: a.integer(),
      marketingBudget: a.float(),
      biography: a.string(),
      socialMediaLinks: a.string(),
      musicLinks: a.string(),
      achievements: a.string(),
      contactInformation: a.string(),
    })
    .authorization(allow => [allow.publicApiKey()]),

  MarketingPlan: a
    .model({
      artistId: a.string(),
      goals: a.string(),
      timeline: a.string(),
      budget: a.float(),
      channels: a.string(),
      assets: a.string(),
      additionalInformation: a.string(),
      status: a.enum(['DRAFT', 'ACTIVE', 'COMPLETED']),
    })
    .authorization(allow => [allow.publicApiKey()]),

  Review: a
    .model({
      name: a.string(),
      message: a.string(),
      rating: a.integer(),
    })
    .authorization(allow => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: { expiresInDays: 30 }
  }
});
