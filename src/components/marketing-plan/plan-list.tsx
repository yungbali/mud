import { useEffect, useState } from 'react';
import { useMarketingPlans } from '../../hooks/useMarketingPlans';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';
import type { Schema } from '../../../amplify/data/resource';

type PlanStatus = 'DRAFT' | 'ACTIVE' | 'COMPLETED';

interface PlanListProps {
  onPlanSelect?: (planId: string) => void;
}

export default function MarketingPlanList({ onPlanSelect }: PlanListProps) {
  const { listUserPlans, updatePlan, loading, error } = useMarketingPlans();
  const [plans, setPlans] = useState<Schema['MarketingPlan']['type'][]>([]);

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    try {
      const result = await listUserPlans();
      if (result.errors) {
        throw new Error(result.errors[0]?.message || 'Failed to load plans');
      }
      setPlans(result.data || []);
    } catch (err) {
      console.error('Failed to load plans:', err);
    }
  };

  const handleStatusUpdate = async (planId: string, newStatus: PlanStatus) => {
    try {
      await updatePlan(planId, { 
        status: [newStatus] 
      });
      await loadPlans();
    } catch (err) {
      console.error('Failed to update plan status:', err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="space-y-4">
      {plans.map((plan) => (
        <Card key={plan.id} className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>Marketing Plan {plan.id}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Goals</h4>
                <p className="text-sm text-gray-600">{plan.goals?.[0]}</p>
              </div>
              
              <div>
                <h4 className="font-medium">Timeline</h4>
                <p className="text-sm text-gray-600">{plan.timeline?.[0]}</p>
              </div>

              <div>
                <h4 className="font-medium">Budget</h4>
                <p className="text-sm text-gray-600">${parseFloat(plan.budget?.[0] || '0').toFixed(2)}</p>
              </div>

              <div className="flex justify-end space-x-2">
                <Button 
                  variant="outline" 
                  onClick={() => onPlanSelect?.(plan.id)}
                >
                  View Details
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline">Update Status</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Update Plan Status</AlertDialogTitle>
                      <AlertDialogDescription>
                        Choose the new status for this marketing plan.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="flex-col sm:flex-row space-y-2 sm:space-y-0">
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleStatusUpdate(plan.id, 'DRAFT')}>
                        Set as Draft
                      </AlertDialogAction>
                      <AlertDialogAction onClick={() => handleStatusUpdate(plan.id, 'ACTIVE')}>
                        Set as Active
                      </AlertDialogAction>
                      <AlertDialogAction onClick={() => handleStatusUpdate(plan.id, 'COMPLETED')}>
                        Mark as Completed
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 