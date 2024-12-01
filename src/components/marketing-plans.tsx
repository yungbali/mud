import { useState, useEffect } from 'react';
import { useMarketingPlans } from '../hooks/useMarketingPlans';
import type { Schema } from "../../amplify/data/resource";
import MarkDownDisplay from './react-markdown';
import MarketingPlansForm from './marketing-plans-form';
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';

export function MarketingPlans() {
  const { createPlan, listUserPlans } = useMarketingPlans();
  const [plans, setPlans] = useState<Schema["MarketingPlan"]["type"][]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    goals: [''],
    artist_name: [''],
    genre: [''],
    target_audience: [''],
    additional_information: [''],
    assets: [''],
    budget: ['0'],
    channels: [''],
    timeline: ['']
  });
  const [generatedPlan, setGeneratedPlan] = useState('');

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    try {
      const result = await listUserPlans();
      if (result.errors?.length) {
        throw new Error(result.errors[0]?.message ?? 'Failed to load plans');
      }
      setPlans(result.data as Schema["MarketingPlan"]["type"][]);
      setError(null);
    } catch (err) {
      console.error('Error loading plans:', err);
      setError(err instanceof Error ? err.message : 'An error occurred loading plans');
      setPlans([]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: [e.target.value]
    }));
  };

  const handleSubmit = async () => {
    try {
      const result = await createPlan({
        ...formData,
        additionalInformation: formData.additional_information || [],
        status: ['DRAFT']
      });
      if (result.errors?.length) {
        throw new Error(result.errors[0]?.message ?? 'Unknown error occurred');
      }
      await loadPlans();
      setFormData({
        goals: [''],
        artist_name: [''],
        genre: [''],
        target_audience: [''],
        additional_information: [''],
        assets: [''],
        budget: ['0'],
        channels: [''],
        timeline: ['']
      });
    } catch (err) {
      console.error('Failed to create plan:', err);
    }
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Create New Marketing Plan</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <MarketingPlansForm
            loading={loading}
            error={error || ''}
            data={generatedPlan}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            prompt={{
              goals: formData.goals[0],
              artist_name: formData.artist_name[0],
              genre: formData.genre[0],
              target_audience: formData.target_audience[0],
              additional_information: formData.additional_information[0],
              assets: formData.assets[0],
              budget: formData.budget[0],
              channels: formData.channels[0],
              timeline: formData.timeline[0]
            }}
          />
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>

      {plans.map((plan) => (
        <MarkDownDisplay
          key={plan.id}
          text={plan.goals?.[0] || ''}
          title={`Marketing Plan for ${plan.artistId?.[0] || 'Unknown Artist'}`}
        />
      ))}
    </>
  );
}
