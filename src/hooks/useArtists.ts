import { models } from '../lib/amplify';
import type { Schema } from "../../amplify/data/resource";
import { useState } from 'react';

export function useArtists() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function createArtist(artistData: Omit<Schema["Artist"]["type"], "id">) {
    setLoading(true);
    try {
      const artist = await models.Artist.create(artistData);
      return artist;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create artist');
      throw err;
    } finally {
      setLoading(false);
    }
  }

  async function getArtist(id: string) {
    try {
      return await models.Artist.get({ id });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch artist');
      throw err;
    }
  }

  function subscribeToArtists(callback: (artists: Schema["Artist"]["type"][]) => void) {
    return models.Artist.observeQuery().subscribe({
      next: ({ items }) => callback(items),
      error: (err) => setError(err.message)
    });
  }

  return {
    createArtist,
    getArtist,
    subscribeToArtists,
    loading,
    error
  };
} 