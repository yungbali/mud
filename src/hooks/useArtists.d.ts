import type { Schema } from "../../amplify/data/resource";
export declare function useArtists(): {
    createArtist: (artistData: Omit<Schema["Artist"]["type"], "id">) => Promise<{
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
    getArtist: (id: string) => Promise<{
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
    subscribeToArtists: (callback: (artists: Schema["Artist"]["type"][]) => void) => import("rxjs").Subscription;
    loading: boolean;
    error: string;
};
