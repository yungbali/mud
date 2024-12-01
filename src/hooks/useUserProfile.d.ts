type ArtistInput = {
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
export declare function useUserProfile(): {
    profile: {
        [x: string]: string[];
        name?: string;
        genre?: string;
        targetAudience?: string;
        followers?: number;
        monthlyStreams?: number;
        marketingBudget?: number;
        biography?: string;
        socialMediaLinks?: string;
        musicLinks?: string;
        achievements?: string;
        contactInformation?: string;
        createdAt?: string;
        updatedAt?: string;
        readonly id: string;
    };
    loading: boolean;
    error: string;
    updateProfile: (data: Partial<ArtistInput>) => Promise<{
        data: {
            [x: string]: string[];
            name: string;
            genre: string;
            targetAudience: string;
            followers: number;
            monthlyStreams: number;
            marketingBudget: number;
            biography: string;
            socialMediaLinks: string;
            musicLinks: string;
            achievements: string;
            contactInformation: string;
            createdAt: string;
            updatedAt: string;
            readonly id: string;
        };
        errors?: import("@aws-amplify/data-schema/runtime").GraphQLFormattedError[];
        extensions?: {
            [key: string]: any;
        };
    }>;
    refreshProfile: () => Promise<void>;
};
export {};
