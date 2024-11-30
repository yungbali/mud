import { getCurrentUser } from 'aws-amplify/auth';
import { models } from '../lib/amplify';
import { useState, useEffect } from 'react';
import type { Schema } from "../../amplify/data/resource";

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

export function useUserProfile() {
  const [profile, setProfile] = useState<Schema["Artist"]["type"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    try {
      const user = await getCurrentUser();
      const userProfile = await models.Artist.get({ id: user.userId });
      setProfile(userProfile.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load profile');
    } finally {
      setLoading(false);
    }
  };
  const updateProfile = async (data: Partial<ArtistInput>) => {
    setLoading(true);
    try {
      const user = await getCurrentUser();
      const updateData = {
        ...data,
        id: user.userId
      } satisfies Record<string, string[] | string>;
      
      const response = await models.Artist.update(updateData as any);
      setProfile(response.data);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update profile');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    profile,
    loading,
    error,
    updateProfile,
    refreshProfile: loadUserProfile
  };
} 