import { useState, useEffect } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>({
  authMode: 'apiKey'
});

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

    // Cleanup subscription on unmount
    return () => sub.unsubscribe();
  }, []);

  const createPlan = async (planData: Omit<Schema["MarketingPlan"]["type"], "id" | "createdAt" | "updatedAt">) => {
    setLoading(true);
    try {
      const { data, errors } = await client.models.MarketingPlan.create(planData);
      if (errors) throw new Error(errors[0].message);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updatePlan = async (id: string, planData: Partial<Schema["MarketingPlan"]["type"]>) => {
    setLoading(true);
    try {
      // Separate id from other fields and convert values to arrays
      const { id: _, ...rest } = planData;  // Exclude id from planData
      const arrayData = Object.entries(rest).reduce((acc, [key, value]) => ({
        ...acc,
        [key]: value ? [value] : undefined
      }), {} as Record<string, string[]>);

      const { data, errors } = await client.models.MarketingPlan.update({
        id,
        ...arrayData
      } as { [x: string]: string[]; id: string });  // Type assertion to match expected type

      if (errors) throw new Error(errors[0].message);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deletePlan = async (id: string) => {
    setLoading(true);
    try {
      const { data, errors } = await client.models.MarketingPlan.delete({ id });
      if (errors) throw new Error(errors[0].message);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { 
    plans, 
    loading, 
    error, 
    createPlan,
    updatePlan,
    deletePlan
  };
} 