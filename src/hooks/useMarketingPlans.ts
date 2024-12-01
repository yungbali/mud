import { models } from '../lib/amplify';
import type { Schema } from "../../amplify/data/resource";
import { useState } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';
import { ApiResponse, MarketingPlanResponse } from '../types/api';

type PlanStatus = 'DRAFT' | 'ACTIVE' | 'COMPLETED';

type MarketingPlanInput = {
  artistId?: string[];
  goals: string[];
  timeline: string[];
  budget: string[];
  channels: string[];
  assets: string[];
  additionalInformation: string[];
  status: PlanStatus[];
};

type MarketingPlanUpdateInput = Partial<{
  artistId: string[];
  goals: string[];
  timeline: string[];
  budget: string[];
  channels: string[];
  assets: string[];
  additionalInformation: string[];
  status: PlanStatus[];
}>;

export const marketingPlanService = {
  listPlans: async () => {
    const { data: items, errors } = await models.MarketingPlan.list();
    return { data: items, errors };
  }
};

export function useMarketingPlans() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function createPlan(planData: MarketingPlanInput): Promise<ApiResponse<MarketingPlanResponse>> {
    setLoading(true);
    try {
      const user = await getCurrentUser();
      const response = await models.MarketingPlan.create({
        ...planData,
        artistId: user.userId,
        goals: planData.goals[0],
        timeline: planData.timeline[0],
        budget: parseFloat(planData.budget[0]),
        channels: planData.channels[0],
        assets: planData.assets[0],
        additionalInformation: planData.additionalInformation[0],
        status: planData.status[0]
      });
      const { data, errors } = response;
      if (errors) throw new Error(errors[0].message);
      if (!data) throw new Error('No data returned');
      const transformedData: MarketingPlanResponse = {
        id: data.id,
        artistId: data.artistId || '',
        goals: [data.goals || ''],
        timeline: [data.timeline || ''],
        budget: [data.budget?.toString() || ''],
        channels: [data.channels || ''],
        assets: [data.assets || ''],
        additionalInformation: [data.additionalInformation || ''],
        status: [data.status || 'DRAFT']
      };
      return { data: transformedData, errors };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create plan');
      throw err;
    } finally {
      setLoading(false);
    }
  }

  async function updatePlan(planId: string, planData: MarketingPlanUpdateInput) {
    setLoading(true);
    try {
      const { status, ...otherFields } = planData;
      
      const updateData = {
        ...otherFields,
        id: planId,
        ...(status ? { status: status } : {})
      } satisfies Record<string, string[] | string>;

      const { data, errors } = await models.MarketingPlan.update(updateData as any);
      if (errors) throw new Error(errors[0].message);
      return { data, errors };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update plan');
      throw err;
    } finally {
      setLoading(false);
    }
  }

  async function deletePlan(planId: string) {
    setLoading(true);
    try {
      const { errors } = await models.MarketingPlan.delete({ id: planId });
      if (errors) throw new Error(errors[0].message);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete plan');
      throw err;
    } finally {
      setLoading(false);
    }
  }

  async function listUserPlans() {
    setLoading(true);
    try {
      const user = await getCurrentUser();
      const { data: items, errors } = await models.MarketingPlan.list({
        filter: {
          artistId: {
            eq: user.userId
          }
        }
      });
      if (errors) throw new Error(errors[0].message);
      return { data: items, errors };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load plans');
      throw err;
    } finally {
      setLoading(false);
    }
  }

  function subscribeToPlan(planId: string, callback: (plan: Schema["MarketingPlan"]["type"]) => void) {
    return models.MarketingPlan.observeQuery({
      filter: {
        id: {
          eq: planId
        }
      }
    }).subscribe({
      next: ({ items }) => items[0] && callback(items[0]),
      error: (err) => setError(err.message)
    });
  }

  return {
    createPlan,
    updatePlan,
    deletePlan,
    subscribeToPlan,
    listUserPlans,
    loading,
    error
  };
} 