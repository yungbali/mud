import { useState, useEffect } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

export function useMarketingPlans() {
  const [plans, setPlans] = useState<Schema["MarketingPlan"]["type"][]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const sub = client.models.MarketingPlan.observeQuery().subscribe({
      next: ({ items }) => {
        setPlans([...items]);
      },
      error: (err) => setError(err.message),
    });

    return () => sub.unsubscribe();
  }, []);

  const createPlan = async (planData: Omit<Schema["MarketingPlan"]["type"], "id">) => {
    setLoading(true);
    try {
      await client.models.MarketingPlan.create(planData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { plans, loading, error, createPlan };
} 