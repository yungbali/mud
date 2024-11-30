export type PlanStatus = 'DRAFT' | 'ACTIVE' | 'COMPLETED';

export type MarketingPlanInput = {
  artistId?: string[];
  goals: string[];
  timeline: string[];
  budget: string[];
  channels: string[];
  assets: string[];
  additionalInformation: string[];
  status: PlanStatus[];
};

export type MarketingPlanUpdateInput = Partial<Omit<MarketingPlanInput, 'artistId'>>;

export type ArtistInput = {
  name: string[];
  genre: string[];
  targetAudience: string[];
  followers: string[];
  monthlyStreams: string[];
  marketingBudget: string[];
  biography: string[];
  socialMediaLinks: string[];
  musicLinks: string[];
  achievements: string[];
  contactInformation: string[];
}; 