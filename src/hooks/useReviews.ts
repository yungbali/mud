import { useState, useEffect } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

export function useReviews() {
  const [reviews, setReviews] = useState<Schema["Review"]["type"][]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const sub = client.models.Review.observeQuery().subscribe({
      next: ({ items }) => {
        setReviews([...items]);
      },
      error: (err) => setError(err.message),
    });

    return () => sub.unsubscribe();
  }, []);

  const createReview = async (reviewData: Omit<Schema["Review"]["type"], "id">) => {
    setLoading(true);
    try {
      await client.models.Review.create(reviewData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { reviews, loading, error, createReview };
} 