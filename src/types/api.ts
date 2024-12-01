export type PlanStatus = 'DRAFT' | 'ACTIVE' | 'COMPLETED';

export interface ApiResponse<T> {
  data: T | null;
  errors?: Array<{
    message: string;
  }>;
}

export interface MarketingPlanResponse {
  id: string;
  artistId: string;
  goals: string[];
  timeline: string[];
  budget: string[];
  channels: string[];
  assets: string[];
  additionalInformation: string[];
  status: PlanStatus[];
}