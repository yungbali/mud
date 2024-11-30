import { models } from '../lib/amplify';
import type { Schema } from "../../amplify/data/resource";
import { useState } from 'react';

export function useReviews() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function createReview(reviewData: Omit<Schema["Review"]["type"], "id">) {
    setLoading(true);
    try {
      const review = await models.Review.create(reviewData);
      return review;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create review');
      throw err;
    } finally {
      setLoading(false);
    }
  }

  async function listReviews() {
    try {
      return await models.Review.list();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch reviews');
      throw err;
    }
  }

  function subscribeToReviews(callback: (reviews: Schema["Review"]["type"][]) => void) {
    return models.Review.observeQuery().subscribe({
      next: ({ items }) => callback(items),
      error: (err) => setError(err.message)
    });
  }

  return {
    createReview,
    listReviews,
    subscribeToReviews,
    loading,
    error
  };
} 