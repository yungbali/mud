import type { Schema } from "../../amplify/data/resource";
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
export declare const marketingPlanService: {
    listPlans: () => Promise<{
        data: {
            [x: string]: string[];
            artistId: string;
            goals: string;
            timeline: string;
            budget: number;
            channels: string;
            assets: string;
            additionalInformation: string;
            status: "COMPLETED" | "ACTIVE" | "DRAFT";
            createdAt: string;
            updatedAt: string;
            readonly id: string;
        }[];
        errors: import("@aws-amplify/data-schema/runtime").GraphQLFormattedError[];
    }>;
};
export declare function useMarketingPlans(): {
    createPlan: (planData: MarketingPlanInput) => Promise<{
        data: {
            [x: string]: string[];
            artistId: string;
            goals: string;
            timeline: string;
            budget: number;
            channels: string;
            assets: string;
            additionalInformation: string;
            status: "COMPLETED" | "ACTIVE" | "DRAFT";
            createdAt: string;
            updatedAt: string;
            readonly id: string;
        };
        errors: import("@aws-amplify/data-schema/runtime").GraphQLFormattedError[];
    }>;
    updatePlan: (planId: string, planData: MarketingPlanUpdateInput) => Promise<{
        data: {
            [x: string]: string[];
            artistId: string;
            goals: string;
            timeline: string;
            budget: number;
            channels: string;
            assets: string;
            additionalInformation: string;
            status: "COMPLETED" | "ACTIVE" | "DRAFT";
            createdAt: string;
            updatedAt: string;
            readonly id: string;
        };
        errors: import("@aws-amplify/data-schema/runtime").GraphQLFormattedError[];
    }>;
    deletePlan: (planId: string) => Promise<void>;
    subscribeToPlan: (planId: string, callback: (plan: Schema["MarketingPlan"]["type"]) => void) => import("rxjs").Subscription;
    listUserPlans: () => Promise<{
        data: {
            [x: string]: string[];
            artistId: string;
            goals: string;
            timeline: string;
            budget: number;
            channels: string;
            assets: string;
            additionalInformation: string;
            status: "COMPLETED" | "ACTIVE" | "DRAFT";
            createdAt: string;
            updatedAt: string;
            readonly id: string;
        }[];
        errors: import("@aws-amplify/data-schema/runtime").GraphQLFormattedError[];
    }>;
    loading: boolean;
    error: string;
};
export {};
