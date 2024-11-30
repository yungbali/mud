import { useState } from 'react';
import { useMarketingPlans } from '../../hooks/useMarketingPlans';
import type { PlanStatus, MarketingPlanInput } from '../../types/marketing';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Alert, AlertDescription } from '../ui/alert';
import { LucideLoaderCircle } from 'lucide-react';

type FormData = MarketingPlanInput;

export default function CreateMarketingPlan() {
  const { createPlan, loading, error } = useMarketingPlans();
  const [formData, setFormData] = useState<FormData>({
    goals: [''],
    timeline: [''],
    budget: ['0'],
    channels: [''],
    assets: [''],
    additionalInformation: [''],
    status: ['DRAFT']
  });

  const handleInputChange = (field: keyof Omit<FormData, 'status'>, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: [value]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPlan({
        ...formData,
        status: formData.status
      });
      // Reset form
      setFormData({
        goals: [''],
        timeline: [''],
        budget: ['0'],
        channels: [''],
        assets: [''],
        additionalInformation: [''],
        status: ['DRAFT']
      });
    } catch (err) {
      console.error('Failed to create plan:', err);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Marketing Plan</CardTitle>
        <CardDescription>Define your marketing strategy</CardDescription>
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
              value={formData.goals[0]}
              onChange={(e) => handleInputChange('goals', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Timeline</Label>
            <Input
              id="timeline"
              value={formData.timeline[0]}
              onChange={(e) => handleInputChange('timeline', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Budget</Label>
            <Input
              id="budget"
              type="number"
              min="0"
              step="0.01"
              value={formData.budget[0]}
              onChange={(e) => handleInputChange('budget', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="channels">Marketing Channels</Label>
            <Textarea
              id="channels"
              placeholder="List your marketing channels"
              value={formData.channels[0]}
              onChange={(e) => handleInputChange('channels', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="assets">Required Assets</Label>
            <Textarea
              id="assets"
              placeholder="What assets do you need?"
              value={formData.assets[0]}
              onChange={(e) => handleInputChange('assets', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalInformation">Additional Information</Label>
            <Textarea
              id="additionalInformation"
              placeholder="Any other relevant details"
              value={formData.additionalInformation[0]}
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
            Create Plan
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 