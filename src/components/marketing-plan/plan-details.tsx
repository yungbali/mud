import { useState, useEffect } from 'react';
import { useMarketingPlans } from '../../hooks/useMarketingPlans';
import { models } from '../../lib/amplify';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Alert, AlertDescription } from '../ui/alert';
import { LucideLoaderCircle } from 'lucide-react';
import type { Schema } from '../../../amplify/data/resource';

interface PlanDetailsProps {
  planId: string;
  onUpdate?: () => void;
}

type PlanStatus = 'DRAFT' | 'ACTIVE' | 'COMPLETED';

type FormData = {
  goals: string[];
  timeline: string[];
  budget: string[];
  channels: string[];
  assets: string[];
  additionalInformation: string[];
  status: PlanStatus;
};

export default function PlanDetails({ planId, onUpdate }: PlanDetailsProps) {
  const { updatePlan, loading, error } = useMarketingPlans();
  const [plan, setPlan] = useState<FormData | null>(null);

  useEffect(() => {
    const loadPlan = async () => {
      try {
        const response = await models.MarketingPlan.get({ id: planId });
        if (response.data) {
          setPlan({
            goals: ensureArray(response.data.goals),
            timeline: ensureArray(response.data.timeline),
            budget: ensureArray(response.data.budget?.toString()),
            channels: ensureArray(response.data.channels),
            assets: ensureArray(response.data.assets),
            additionalInformation: ensureArray(response.data.additionalInformation),
            status: response.data.status as PlanStatus
          });
        }
      } catch (err) {
        console.error('Failed to load plan:', err);
      }
    };
    loadPlan();
  }, [planId]);

  const ensureArray = (value: string | string[] | null | undefined): string[] => {
    if (Array.isArray(value)) return value;
    if (!value) return [''];
    return [value];
  };

  const handleInputChange = (field: keyof Omit<FormData, 'status'>, value: string) => {
    setPlan(prev => prev ? ({
      ...prev,
      [field]: [value]
    }) : null);
  };

  const handleStatusChange = (value: PlanStatus) => {
    setPlan(prev => prev ? ({
      ...prev,
      status: value
    }) : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!plan) return;

    try {
      await updatePlan(planId, {
        goals: plan.goals,
        timeline: plan.timeline,
        budget: plan.budget,
        channels: plan.channels,
        assets: plan.assets,
        additionalInformation: plan.additionalInformation,
        status: [plan.status]
      });
      onUpdate?.();
    } catch (err) {
      console.error('Failed to update plan:', err);
    }
  };

  if (!plan) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Edit Marketing Plan</CardTitle>
        <CardDescription>Update your marketing strategy</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="goals">Marketing Goals</Label>
            <Textarea
              id="goals"
              value={plan.goals[0]}
              onChange={(e) => handleInputChange('goals', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Budget</Label>
            <Input
              id="budget"
              type="number"
              value={parseFloat(plan.budget[0] || '0')}
              onChange={(e) => handleInputChange('budget', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Timeline</Label>
            <Input
              id="timeline"
              value={plan.timeline[0]}
              onChange={(e) => handleInputChange('timeline', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="channels">Marketing Channels</Label>
            <Textarea
              id="channels"
              value={plan.channels[0]}
              onChange={(e) => handleInputChange('channels', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="assets">Required Assets</Label>
            <Textarea
              id="assets"
              value={plan.assets[0]}
              onChange={(e) => handleInputChange('assets', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalInformation">Additional Information</Label>
            <Textarea
              id="additionalInformation"
              value={plan.additionalInformation[0]}
              onChange={(e) => handleInputChange('additionalInformation', e.target.value)}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              <LucideLoaderCircle className="animate-spin mr-2" />
            ) : null}
            Save Changes
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 