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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useUserProfile } from '../hooks/useUserProfile';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Alert, AlertDescription } from './ui/alert';
import { LucideLoaderCircle } from 'lucide-react';
export default function ProfileManagement() {
    var _this = this;
    var _a = useUserProfile(), profile = _a.profile, loading = _a.loading, error = _a.error, updateProfile = _a.updateProfile;
    var _b = useState({
        name: [''],
        genre: [''],
        targetAudience: [''],
        biography: [''],
        socialMediaLinks: [''],
        musicLinks: [''],
        achievements: [''],
        contactInformation: [''],
        followers: ['0'],
        monthlyStreams: ['0'],
        marketingBudget: ['0']
    }), formData = _b[0], setFormData = _b[1];
    var handleInputChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = [value], _a)));
        });
    };
    var handleSubmit = function () { return __awaiter(_this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, updateProfile(formData)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error('Failed to update profile:', err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    if (loading) {
        return _jsx("div", { className: "flex justify-center", children: _jsx(LucideLoaderCircle, { className: "animate-spin" }) });
    }
    return (_jsxs(Card, { className: "w-full max-w-2xl mx-auto", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Artist Profile" }), _jsx(CardDescription, { children: "Manage your artist information" })] }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [error && (_jsx(Alert, { variant: "destructive", children: _jsx(AlertDescription, { children: error }) })), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "name", children: "Artist Name" }), _jsx(Input, { id: "name", value: formData.name, onChange: handleInputChange })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "genre", children: "Genre" }), _jsx(Input, { id: "genre", value: formData.genre, onChange: handleInputChange })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "targetAudience", children: "Target Audience" }), _jsx(Input, { id: "targetAudience", value: formData.targetAudience, onChange: handleInputChange })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "biography", children: "Biography" }), _jsx(Textarea, { id: "biography", value: formData.biography, onChange: handleInputChange })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "socialMediaLinks", children: "Social Media Links" }), _jsx(Textarea, { id: "socialMediaLinks", value: formData.socialMediaLinks, onChange: handleInputChange })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "musicLinks", children: "Music Links" }), _jsx(Textarea, { id: "musicLinks", value: formData.musicLinks, onChange: handleInputChange })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "achievements", children: "Achievements" }), _jsx(Textarea, { id: "achievements", value: formData.achievements, onChange: handleInputChange })] }), _jsxs(Button, { type: "submit", className: "w-full", disabled: loading, children: [loading ? (_jsx(LucideLoaderCircle, { className: "animate-spin mr-2" })) : null, "Save Profile"] })] }) })] }));
}
