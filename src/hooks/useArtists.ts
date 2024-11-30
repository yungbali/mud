import { useState, useEffect } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

export function useArtists() {
  const [artists, setArtists] = useState<Schema["Artist"]["type"][]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const sub = client.models.Artist.observeQuery().subscribe({
      next: ({ items }) => {
        setArtists([...items]);
      },
      error: (err) => setError(err.message),
    });

    return () => sub.unsubscribe();
  }, []);

  const createArtist = async (artistData: Omit<Schema["Artist"]["type"], "id">) => {
    setLoading(true);
    try {
      await client.models.Artist.create(artistData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { artists, loading, error, createArtist };
} 