var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useMarketingPlans } from '../../hooks/useMarketingPlans';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from '../ui/alert-dialog';
export default function MarketingPlanList(_a) {
    var _this = this;
    var onPlanSelect = _a.onPlanSelect;
    var _b = useMarketingPlans(), listUserPlans = _b.listUserPlans, updatePlan = _b.updatePlan, loading = _b.loading, error = _b.error;
    var _c = useState([]), plans = _c[0], setPlans = _c[1];
    useEffect(function () {
        loadPlans();
    }, []);
    var loadPlans = function () { return __awaiter(_this, void 0, void 0, function () {
        var result, err_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, listUserPlans()];
                case 1:
                    result = _b.sent();
                    if (result.errors) {
                        throw new Error(((_a = result.errors[0]) === null || _a === void 0 ? void 0 : _a.message) || 'Failed to load plans');
                    }
                    setPlans(result.data || []);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _b.sent();
                    console.error('Failed to load plans:', err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleStatusUpdate = function (planId, newStatus) { return __awaiter(_this, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, updatePlan(planId, {
                            status: [newStatus]
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, loadPlans()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    console.error('Failed to update plan status:', err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    if (loading) {
        return _jsx("div", { children: "Loading..." });
    }
    if (error) {
        return _jsxs("div", { children: ["Error: ", error] });
    }
    return (_jsx("div", { className: "space-y-4", children: plans.map(function (plan) {
            var _a, _b, _c;
            return (_jsxs(Card, { className: "cursor-pointer hover:shadow-md transition-shadow", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { children: ["Marketing Plan ", plan.id] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium", children: "Goals" }), _jsx("p", { className: "text-sm text-gray-600", children: (_a = plan.goals) === null || _a === void 0 ? void 0 : _a[0] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium", children: "Timeline" }), _jsx("p", { className: "text-sm text-gray-600", children: (_b = plan.timeline) === null || _b === void 0 ? void 0 : _b[0] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium", children: "Budget" }), _jsxs("p", { className: "text-sm text-gray-600", children: ["$", parseFloat(((_c = plan.budget) === null || _c === void 0 ? void 0 : _c[0]) || '0').toFixed(2)] })] }), _jsxs("div", { className: "flex justify-end space-x-2", children: [_jsx(Button, { variant: "outline", onClick: function () { return onPlanSelect === null || onPlanSelect === void 0 ? void 0 : onPlanSelect(plan.id); }, children: "View Details" }), _jsxs(AlertDialog, { children: [_jsx(AlertDialogTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Update Status" }) }), _jsxs(AlertDialogContent, { children: [_jsxs(AlertDialogHeader, { children: [_jsx(AlertDialogTitle, { children: "Update Plan Status" }), _jsx(AlertDialogDescription, { children: "Choose the new status for this marketing plan." })] }), _jsxs(AlertDialogFooter, { className: "flex-col sm:flex-row space-y-2 sm:space-y-0", children: [_jsx(AlertDialogCancel, { children: "Cancel" }), _jsx(AlertDialogAction, { onClick: function () { return handleStatusUpdate(plan.id, 'DRAFT'); }, children: "Set as Draft" }), _jsx(AlertDialogAction, { onClick: function () { return handleStatusUpdate(plan.id, 'ACTIVE'); }, children: "Set as Active" }), _jsx(AlertDialogAction, { onClick: function () { return handleStatusUpdate(plan.id, 'COMPLETED'); }, children: "Mark as Completed" })] })] })] })] })] }) })] }, plan.id));
        }) }));
}
