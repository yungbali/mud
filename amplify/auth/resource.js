import { defineAuth } from '@aws-amplify/backend';
/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export var auth = defineAuth({
    loginWith: {
        email: true,
    },
});
