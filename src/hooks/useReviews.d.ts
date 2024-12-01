import type { Schema } from "../../amplify/data/resource";

interface Review {
  name: string[];
  message: string[];
  rating: number[];
  createdAt: string[];
  updatedAt: string[];
  id: string;
}

interface ReviewInput {
  name: string[];
  message: string[];
  rating: number[];
}

interface ReviewResponse {
  name: string[];
  message: string[];
  rating: number[];
  createdAt: string[];
  updatedAt: string[];
  id: string;
}

export interface UseReviews {
  createReview: (data: ReviewInput) => Promise<{ data: ReviewResponse; errors?: any[] }>;
  listReviews: () => Promise<{ data: ReviewResponse[]; errors?: any[] }>;
  loading: boolean;
  error: string | null;
}
