import { signIn, signUp } from 'aws-amplify/auth';
import { useState } from 'react';
import axios from 'axios';
import { BASEURL } from '../lib/constants';

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
    try {
      setLoading(true);
      const response = await axios.post(`${BASEURL}/auth/register`, {
        name,
        email,
        password
      });
      
      if (response.data.token) {
        localStorage.setItem("musette-jwt", response.data.token);
        return true;
      }
      return false;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Registration failed');
      } else {
        setError('Registration failed');
      }
      return false;
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