var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useMarketingPlans } from '../hooks/useMarketingPlans';
import MarkDownDisplay from './react-markdown';
import MarketingPlansForm from './marketing-plans-form';
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';
export function MarketingPlans() {
    var _this = this;
    var _a = useMarketingPlans(), createPlan = _a.createPlan, listUserPlans = _a.listUserPlans;
    var _b = useState([]), plans = _b[0], setPlans = _b[1];
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var _d = useState(null), error = _d[0], setError = _d[1];
    var _e = useState({
        goals: [''],
        artist_name: [''],
        genre: [''],
        target_audience: [''],
        additional_information: [''],
        assets: [''],
        budget: ['0'],
        channels: [''],
        timeline: ['']
    }), formData = _e[0], setFormData = _e[1];
    var _f = useState(''), generatedPlan = _f[0], setGeneratedPlan = _f[1];
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
                    setPlans(result.data);
                    setError(null);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _b.sent();
                    console.error('Error loading plans:', err_1);
                    setError(err_1 instanceof Error ? err_1.message : 'An error occurred loading plans');
                    setPlans([]);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleInputChange = function (e) {
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[e.target.id] = [e.target.value], _a)));
        });
    };
    var handleSubmit = function () { return __awaiter(_this, void 0, void 0, function () {
        var result, err_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setLoading(true);
                    setError(null);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, createPlan(__assign(__assign({}, formData), { additionalInformation: [formData.additional_information[0]], status: ['DRAFT'] }))];
                case 2:
                    result = _b.sent();
                    if (result.errors) {
                        throw new Error(((_a = result.errors[0]) === null || _a === void 0 ? void 0 : _a.message) || 'Unknown error occurred');
                    }
                    return [4 /*yield*/, loadPlans()];
                case 3:
                    _b.sent();
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
                    return [3 /*break*/, 6];
                case 4:
                    err_2 = _b.sent();
                    console.error('Error creating plan:', err_2);
                    setError(err_2 instanceof Error ? err_2.message : 'An error occurred creating the plan');
                    return [3 /*break*/, 6];
                case 5:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (_jsxs(_Fragment, { children: [_jsxs(AlertDialog, { children: [_jsx(AlertDialogTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Create New Marketing Plan" }) }), _jsxs(AlertDialogContent, { children: [_jsx(MarketingPlansForm, { loading: loading, error: error || '', data: generatedPlan, handleInputChange: handleInputChange, handleSubmit: handleSubmit, prompt: {
                                    goals: formData.goals[0],
                                    artist_name: formData.artist_name[0],
                                    genre: formData.genre[0],
                                    target_audience: formData.target_audience[0],
                                    additional_information: formData.additional_information[0],
                                    assets: formData.assets[0],
                                    budget: formData.budget[0],
                                    channels: formData.channels[0],
                                    timeline: formData.timeline[0]
                                } }), _jsx(AlertDialogCancel, { children: "Cancel" })] })] }), plans.map(function (plan) {
                var _a, _b;
                return (_jsx(MarkDownDisplay, { text: ((_a = plan.goals) === null || _a === void 0 ? void 0 : _a[0]) || '', title: "Marketing Plan for ".concat(((_b = plan.artistId) === null || _b === void 0 ? void 0 : _b[0]) || 'Unknown Artist') }, plan.id));
            })] }));
}
