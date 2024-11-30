import { useState } from 'react';
import { useMarketingPlans } from '../hooks/useMarketingPlans';
import MarkDownDisplay from './react-markdown';
import MarketingPlansForm from './marketing-plans-form';
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';

export function MarketingPlans() {
  const { plans, loading, error, createPlan } = useMarketingPlans();
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    const now = new Date().toISOString();
    await createPlan({
      artistId: [formData.artist_name],
      goals: [formData.goals],
      timeline: [formData.timeline],
      budget: parseFloat(formData.budget),
      channels: [formData.channels],
      assets: [formData.assets],
      additionalInformation: [formData.additional_information],
      status: 'DRAFT',
      createdAt: now,
      updatedAt: now,
      genre: [formData.genre],
      target_audience: [formData.target_audience]
    });
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
