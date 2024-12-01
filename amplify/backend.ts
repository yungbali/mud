import { authConfig } from './auth/resource';
import { Amplify } from 'aws-amplify';

// Configure Amplify with auth settings
Amplify.configure({
  Auth: authConfig.Auth
});

// Export the configuration
export { authConfig };
