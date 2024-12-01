export type AuthConfig = {
  Auth: {
    Cognito: {
      userPoolId: string;
      userPoolClientId: string;
      signUpVerificationMethod: 'code';
    };
  };
};

export const authConfig: AuthConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID || 'your-user-pool-id',
      userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || 'your-client-id',
      signUpVerificationMethod: 'code'
    }
  }
};
