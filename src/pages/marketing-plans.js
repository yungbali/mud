import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import CreateMarketingPlan from '../components/marketing-plan/create-plan';
import MarketingPlanList from '../components/marketing-plan/plan-list';
import PlanDetails from '../components/marketing-plan/plan-details';
export default function MarketingPlansPage() {
    var _a = useState(null), selectedPlanId = _a[0], setSelectedPlanId = _a[1];
    return (_jsx("div", { className: "container mx-auto py-8", children: _jsxs(Tabs, { defaultValue: "list", className: "w-full", children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "list", children: "My Plans" }), _jsx(TabsTrigger, { value: "create", children: "Create New Plan" }), selectedPlanId && (_jsx(TabsTrigger, { value: "details", children: "Plan Details" }))] }), _jsx(TabsContent, { value: "list", children: _jsx(MarketingPlanList, { onPlanSelect: setSelectedPlanId }) }), _jsx(TabsContent, { value: "create", children: _jsx(CreateMarketingPlan, {}) }), selectedPlanId && (_jsx(TabsContent, { value: "details", children: _jsx(PlanDetails, { planId: selectedPlanId, onUpdate: function () {
                            setSelectedPlanId(null);
                        } }) }))] }) }));
}
