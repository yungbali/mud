import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";

class MarketingPlanService {
  private client = generateClient<Schema>({ authMode: 'apiKey' });

  async createPlan(planData: Omit<Schema["MarketingPlan"]["type"], "id">) {
    const input = {
      id: undefined,
      artistId: planData.artistId,
      goals: planData.goals,
      timeline: planData.timeline,
      budget: planData.budget,
      channels: planData.channels,
      assets: planData.assets,
      additionalInformation: planData.additionalInformation,
      status: planData.status
    };

    return this.client.models.MarketingPlan.create(input);
  }

  async listPlans() {
    return this.client.models.MarketingPlan.list({
      limit: 100
    });
  }
}

export const marketingPlanService = new MarketingPlanService(); 