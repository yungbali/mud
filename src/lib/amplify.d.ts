export declare const client: import("@aws-amplify/api-graphql").V6Client<{
    MarketingPlan: import("node_modules/@aws-amplify/data-schema/dist/esm/ClientSchema/Core").ClientModel</*elided*/ any, import("node_modules/@aws-amplify/data-schema/dist/esm/ClientSchema/utilities").SchemaMetadata<import("@aws-amplify/data-schema").ModelSchema<{
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
    }, never>>, false, import("@aws-amplify/data-schema-types").SetTypeSubArg<{
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
    })[]>, "MarketingPlan">;
    Artist: import("node_modules/@aws-amplify/data-schema/dist/esm/ClientSchema/Core").ClientModel</*elided*/ any, import("node_modules/@aws-amplify/data-schema/dist/esm/ClientSchema/utilities").SchemaMetadata<import("@aws-amplify/data-schema").ModelSchema<{
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
    }, never>>, false, import("@aws-amplify/data-schema-types").SetTypeSubArg<{
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
    })[]>, "Artist">;
    Review: import("node_modules/@aws-amplify/data-schema/dist/esm/ClientSchema/Core").ClientModel</*elided*/ any, import("node_modules/@aws-amplify/data-schema/dist/esm/ClientSchema/utilities").SchemaMetadata<import("@aws-amplify/data-schema").ModelSchema<{
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
    }, never>>, false, import("@aws-amplify/data-schema-types").SetTypeSubArg<{
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
    })[]>, "Review">;
}>;
type AmplifyModels = {
    MarketingPlan: typeof client.models.MarketingPlan;
    Artist: typeof client.models.Artist;
    Review: typeof client.models.Review;
};
export declare const models: AmplifyModels;
export {};
