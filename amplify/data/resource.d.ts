import { type ClientSchema } from '@aws-amplify/backend';
declare const schema: import("@aws-amplify/data-schema").ModelSchema<{
    types: {
        MarketingPlan: import("@aws-amplify/data-schema").ModelType<import("@aws-amplify/data-schema-types").SetTypeSubArg<{
            fields: {
                artistId: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                goals: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                timeline: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                budget: import("@aws-amplify/data-schema").ModelField<number, never, undefined>;
                channels: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                assets: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                additionalInformation: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                status: import("@aws-amplify/data-schema").EnumType<readonly ["DRAFT", "ACTIVE", "COMPLETED"]>;
                createdAt: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                updatedAt: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
            };
            identifier: import("@aws-amplify/data-schema").ModelDefaultIdentifier;
            secondaryIndexes: [];
            authorization: [];
            disabledOperations: [];
        }, "authorization", (import("@aws-amplify/data-schema").Authorization<"public", undefined, false> & {
            to: <SELF extends import("@aws-amplify/data-schema").Authorization<any, any, any>>(this: SELF, operations: import("node_modules/@aws-amplify/data-schema/dist/esm/Authorization").Operation[]) => Omit<SELF, "to">;
        })[]>, "authorization">;
        Artist: import("@aws-amplify/data-schema").ModelType<import("@aws-amplify/data-schema-types").SetTypeSubArg<{
            fields: {
                name: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                genre: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                targetAudience: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                followers: import("@aws-amplify/data-schema").ModelField<number, never, undefined>;
                monthlyStreams: import("@aws-amplify/data-schema").ModelField<number, never, undefined>;
                marketingBudget: import("@aws-amplify/data-schema").ModelField<number, never, undefined>;
                biography: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                socialMediaLinks: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                musicLinks: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                achievements: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                contactInformation: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                createdAt: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                updatedAt: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
            };
            identifier: import("@aws-amplify/data-schema").ModelDefaultIdentifier;
            secondaryIndexes: [];
            authorization: [];
            disabledOperations: [];
        }, "authorization", (import("@aws-amplify/data-schema").Authorization<"public", undefined, false> & {
            to: <SELF extends import("@aws-amplify/data-schema").Authorization<any, any, any>>(this: SELF, operations: import("node_modules/@aws-amplify/data-schema/dist/esm/Authorization").Operation[]) => Omit<SELF, "to">;
        })[]>, "authorization">;
        Review: import("@aws-amplify/data-schema").ModelType<import("@aws-amplify/data-schema-types").SetTypeSubArg<{
            fields: {
                name: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                message: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                rating: import("@aws-amplify/data-schema").ModelField<number, never, undefined>;
                createdAt: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
                updatedAt: import("@aws-amplify/data-schema").ModelField<string, never, undefined>;
            };
            identifier: import("@aws-amplify/data-schema").ModelDefaultIdentifier;
            secondaryIndexes: [];
            authorization: [];
            disabledOperations: [];
        }, "authorization", (import("@aws-amplify/data-schema").Authorization<"public", undefined, false> & {
            to: <SELF extends import("@aws-amplify/data-schema").Authorization<any, any, any>>(this: SELF, operations: import("node_modules/@aws-amplify/data-schema/dist/esm/Authorization").Operation[]) => Omit<SELF, "to">;
        })[]>, "authorization">;
    };
    authorization: [];
    configuration: any;
}, never>;
export type Schema = ClientSchema<typeof schema>;
export declare const data: import("@aws-amplify/plugin-types").ConstructFactory<import("@aws-amplify/graphql-api-construct").AmplifyGraphqlApi>;
export {};
