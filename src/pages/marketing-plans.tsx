import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import CreateMarketingPlan from '../components/marketing-plan/create-plan';
import MarketingPlanList from '../components/marketing-plan/plan-list';
import PlanDetails from '../components/marketing-plan/plan-details';

export default function MarketingPlansPage() {
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  return (
    <div className="container mx-auto py-8">
      <Tabs defaultValue="list" className="w-full">
        <TabsList>
          <TabsTrigger value="list">My Plans</TabsTrigger>
          <TabsTrigger value="create">Create New Plan</TabsTrigger>
          {selectedPlanId && (
            <TabsTrigger value="details">Plan Details</TabsTrigger>
          )}
        </TabsList>
        
        <TabsContent value="list">
          <MarketingPlanList onPlanSelect={setSelectedPlanId} />
        </TabsContent>
        
        <TabsContent value="create">
          <CreateMarketingPlan />
        </TabsContent>
        
        {selectedPlanId && (
          <TabsContent value="details">
            <PlanDetails 
              planId={selectedPlanId} 
              onUpdate={() => {
                setSelectedPlanId(null);
              }} 
            />
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
} 