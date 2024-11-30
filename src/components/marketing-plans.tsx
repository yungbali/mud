import { useState, useEffect } from 'react';
import { marketingPlanService } from '../hooks/useMarketingPlans';
import type { Schema } from "../../amplify/data/resource";
import MarkDownDisplay from './react-markdown';
import MarketingPlansForm from './marketing-plans-form';
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';

export function MarketingPlans() {
  const [plans, setPlans] = useState<Schema["MarketingPlan"]["type"][]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    goals: '',
    artist_name: '',
    genre: '',
    target_audience: '',
    additional_information: '',
    assets: '',
    budget: '',
    channels: '',
    timeline: ''
  });
  const [generatedPlan, setGeneratedPlan] = useState('');

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    try {
      const { data } = await marketingPlanService.listPlans();
      setPlans(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await marketingPlanService.createPlan({
        artistId: [formData.artist_name],
        goals: [formData.goals],
        timeline: [formData.timeline],
        budget: [formData.budget],
        channels: [formData.channels],
        assets: [formData.assets],
        additionalInformation: [formData.additional_information],
        status: ['DRAFT']
      });
      await loadPlans(); // Refresh the list after creating
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
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
            prompt={formData}
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
