import { signIn, signUp } from 'aws-amplify/auth';
import { useState } from 'react';

export function useAuthFlow() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      await signIn({ username: email, password });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            name,
            email
          }
        }
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign up');
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    register,
    loading,
    error
  };
} 