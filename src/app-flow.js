'use client';
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { ArrowLeft, PenTool, FileText, ImageIcon, MessageSquare, Star, PlusCircle, LucideLoaderCircle, Terminal } from 'lucide-react';
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Progress } from "./components/ui/progress";
import { Label } from "./components/ui/label";
import { MarketingPlans } from "./components/marketing-plans";
import { EPKCreation } from "./components/epk-creation";
import { AlbumArtwork } from "./components/album-artwork";
import { AIMarketingAdvisor } from "./components/ai-marketing-advisor";
import placeholderImage from "./assets/placeholder-image.svg";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Alert, AlertTitle } from "./components/ui/alert";
import { BASEURL } from "./util/baseUrl";
var useFetchReviews = function (_a) {
    var refetch = _a.refetch;
    var _b = useState(false), loading = _b[0], setLoading = _b[1];
    var _c = useState(""), error = _c[0], setError = _c[1];
    // const [data, setData] = useState<{_id: string; name: string; message: string; rating: number;}[]>([]);
    var _d = useState([]), data = _d[0], setData = _d[1];
    useEffect(function () {
        function getReviews() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    axios.get("".concat(BASEURL, "/review"), {
                        headers: {
                            Authorization: "Bearer ".concat(localStorage.getItem("musette-jwt"))
                        }
                    }).then(function (res) {
                        var _a;
                        setLoading(false);
                        setData((_a = res.data.data) === null || _a === void 0 ? void 0 : _a.data);
                        // console.log(res.data.data)
                    }).catch(function (err) {
                        var _a, _b, _c, _d;
                        setLoading(false);
                        setError((_b = (_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message);
                        console.log((_d = (_c = err === null || err === void 0 ? void 0 : err.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message);
                    });
                    return [2 /*return*/];
                });
            });
        }
        getReviews();
    }, [refetch]);
    return {
        reviewLoading: loading,
        reviews: data,
        reviewError: error
    };
};
export default function Component() {
    var _a = useState('onboarding'), screen = _a[0], setScreen = _a[1];
    var _b = useState(0), onboardingStep = _b[0], setOnboardingStep = _b[1];
    var credits = useState(250)[0];
    var _c = useState(false), showFeedback = _c[0], setShowFeedback = _c[1];
    var _d = useState(null), activeService = _d[0], setActiveService = _d[1];
    var onboardingSteps = [
        {
            title: "Welcome to Afromuse Digital",
            description: "Let's get you set up to amplify your music to the world!",
            action: "Next"
        },
        {
            title: "Tell us about yourself",
            description: "What best describes you?",
            options: ["Solo Artist", "Band", "Producer", "Manager"],
            action: "Continue"
        },
        {
            title: "Your goals",
            description: "What are you looking to achieve?",
            options: ["Grow my audience", "Release new music", "Book more gigs", "Improve my brand"],
            action: "Finish"
        }
    ];
    var handleOnboardingNext = function () {
        if (onboardingStep < onboardingSteps.length - 1) {
            setOnboardingStep(onboardingStep + 1);
        }
        else {
            setScreen('dashboard');
        }
    };
    useEffect(function () {
        var pattern = document.createElement('img');
        pattern.src = '/placeholder.svg?height=200&width=200';
        pattern.onload = function () {
            document.body.style.backgroundImage = "url(".concat(pattern.src, ")");
            document.body.style.backgroundRepeat = 'repeat';
            document.body.style.backgroundSize = '200px';
            document.body.style.opacity = '0.1';
        };
        return function () {
            document.body.style.backgroundImage = 'none';
            document.body.style.opacity = '1';
        };
    }, []);
    var renderServiceInterface = function () {
        switch (activeService) {
            case 'marketing-plans':
                return _jsx(MarketingPlans, {});
            case 'epk-creation':
                return _jsx(EPKCreation, {});
            case 'album-artwork':
                return _jsx(AlbumArtwork, {});
            case 'ai-marketing-advisor':
                return _jsx(AIMarketingAdvisor, {});
            default:
                return null;
        }
    };
    var _e = useState(""), responseMessage = _e[0], setResponseMessage = _e[1];
    var _f = useState(false), loading = _f[0], setLoading = _f[1];
    var _g = useState(""), error = _g[0], setError = _g[1];
    var _h = useState(""), message = _h[0], setMessage = _h[1];
    var _j = useState(""), rating = _j[0], setRating = _j[1];
    var _k = useState(0), refetchVal = _k[0], setRefetchVal = _k[1];
    var handleCreateReview = function () {
        setLoading(true);
        setError("");
        setResponseMessage("");
        axios.post("http://localhost:3001/api/review", { message: message, rating: rating }, {
            headers: {
                Authorization: "Bearer ".concat(localStorage.getItem("musette-jwt"))
            }
        }).then(function (res) {
            setLoading(false);
            console.log(res.data);
            setResponseMessage(res.data.message);
            setMessage("");
            setRating("");
            setRefetchVal(refetchVal + 1);
        }).catch(function (err) {
            var _a, _b, _c, _d;
            setLoading(false);
            setError((_b = (_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message);
            console.log((_d = (_c = err === null || err === void 0 ? void 0 : err.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message);
        });
    };
    var _l = useFetchReviews({ refetch: refetchVal }), reviewLoading = _l.reviewLoading, reviews = _l.reviews;
    if (!localStorage.getItem("musette-jwt")) {
        return _jsx(Navigate, { to: "/login" });
    }
    return (_jsxs("div", { className: "min-h-screen bg-[#F5F5F5] bg-opacity-90 flex flex-col", children: [screen !== 'onboarding' && (_jsxs(Button, { variant: "ghost", size: "icon", className: "absolute top-4 left-4 text-[#9D5465]", onClick: function () { return setScreen('dashboard'); }, children: [_jsx(ArrowLeft, { className: "h-6 w-6" }), _jsx("span", { className: "sr-only", children: "Back to Dashboard" })] })), _jsxs("div", { className: "flex-1 flex flex-col items-center justify-center p-6 space-y-8", children: [screen === 'onboarding' && (_jsxs("div", { className: "w-full max-w-md space-y-6", children: [_jsxs("div", { className: "space-y-2 text-center", children: [_jsx("img", { src: placeholderImage, alt: "Afromuse Digital Logo", width: 100, height: 100, className: "mx-auto mb-4 object-cover" }), _jsx("h1", { className: "text-2xl font-semibold text-[#333333]", children: onboardingSteps[onboardingStep].title }), _jsx("p", { className: "text-[#666666]", children: onboardingSteps[onboardingStep].description })] }), onboardingSteps[onboardingStep].options && (_jsx("div", { className: "grid grid-cols-2 gap-4", children: onboardingSteps[onboardingStep].options.map(function (option, index) { return (_jsx(Button, { variant: "outline", className: "border-[#9D5465] text-[#9D5465] hover:bg-[#9D5465] hover:text-white", children: option }, index)); }) })), _jsx(Button, { className: "w-full bg-[#9D5465] hover:bg-[#8A4757] text-white", size: "lg", onClick: handleOnboardingNext, children: onboardingSteps[onboardingStep].action }), _jsx(Progress, { value: (onboardingStep + 1) * (100 / onboardingSteps.length), className: "w-full" })] })), screen === 'dashboard' && (_jsxs("div", { className: "container mx-auto p-6 space-y-8", children: [_jsxs("header", { className: "flex justify-between items-center", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold text-[#333333]", children: "Welcome to Afromuse Digital" }), _jsx("p", { className: "text-xl text-[#666666]", children: "Empowering African creators worldwide" })] }), _jsxs(Avatar, { className: "h-12 w-12", children: [_jsx(AvatarImage, { src: "/placeholder.svg?height=48&width=48", alt: "User" }), _jsx(AvatarFallback, { children: "UN" })] })] }), _jsxs(Tabs, { defaultValue: "services", className: "space-y-6", children: [_jsxs(TabsList, { className: "grid grid-cols-4 gap-4", children: [_jsx(TabsTrigger, { value: "services", children: "Services" }), _jsx(TabsTrigger, { value: "projects", children: "My Projects" }), _jsx(TabsTrigger, { value: "credits", children: "Credits" }), _jsx(TabsTrigger, { value: "profile", children: "Profile" })] }), _jsx(TabsContent, { value: "services", className: "space-y-6", children: _jsxs("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: [_jsx(ServiceCard, { title: "Marketing Plans", description: "Craft effective strategies to promote your music", icon: _jsx(PenTool, { className: "h-12 w-12 text-[#9D5465]" }), credits: 75, onClick: function () {
                                                        setActiveService('marketing-plans');
                                                        setScreen('service');
                                                    } }), _jsx(ServiceCard, { title: "EPK Creation", description: "Build a professional Electronic Press Kit", icon: _jsx(FileText, { className: "h-12 w-12 text-[#9D5465]" }), credits: 100, onClick: function () {
                                                        setActiveService('epk-creation');
                                                        setScreen('service');
                                                    } }), _jsx(ServiceCard, { title: "Album Artwork", description: "Design stunning visuals for your music", icon: _jsx(ImageIcon, { className: "h-12 w-12 text-[#9D5465]" }), credits: 50, onClick: function () {
                                                        setActiveService('album-artwork');
                                                        setScreen('service');
                                                    } }), _jsx(ServiceCard, { title: "AI Marketing Advisor", description: "Get personalized marketing insights powered by AI", icon: _jsx(MessageSquare, { className: "h-12 w-12 text-[#9D5465]" }), credits: 60, onClick: function () {
                                                        setActiveService('ai-marketing-advisor');
                                                        setScreen('service');
                                                    } })] }) }), _jsx(TabsContent, { value: "projects", children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-2xl text-[#333333]", children: "My Projects" }), _jsx(CardDescription, { children: "View and manage your ongoing projects" })] }), _jsx(CardContent, { className: "pt-6", children: _jsxs("div", { className: "text-center py-12 bg-[#F5F5F5] rounded-lg", children: [_jsx("p", { className: "text-[#666666] mb-4", children: "You have no active projects." }), _jsxs(Button, { className: "bg-[#9D5465] hover:bg-[#8A4757] text-white", children: [_jsx(PlusCircle, { className: "mr-2 h-4 w-4" }), " Start a New Project"] })] }) })] }) }), _jsx(TabsContent, { value: "credits", children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-2xl text-[#333333]", children: "Credit Balance" }), _jsx(CardDescription, { children: "Manage your Afromuse Digital credits" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "text-4xl font-bold text-[#333333]", children: [credits, " Credits"] }), _jsx(Button, { className: "bg-[#9D5465] hover:bg-[#8A4757] text-white", children: "Purchase More Credits" })] })] }) }), _jsx(TabsContent, { value: "profile", children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-2xl text-[#333333]", children: "My Profile" }), _jsx(CardDescription, { children: "Manage your account settings and preferences" })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-[#666666]", children: "Profile settings and options coming soon!" }) })] }) })] }), _jsxs("section", { className: "space-y-6", children: [_jsx("h2", { className: "text-2xl font-semibold text-[#333333]", children: "Success Stories" }), _jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [!reviewLoading && reviews && (reviews === null || reviews === void 0 ? void 0 : reviews.length) > 0 && (reviews === null || reviews === void 0 ? void 0 : reviews.map(function (el) {
                                                return (_jsx(TestimonialCard, { name: el.name, quote: el.message, image: "/placeholder.svg?height=64&width=64", rating: el.rating }, el._id));
                                            })), _jsx(TestimonialCard, { name: "Aisha M.", quote: "The AI Marketing Advisor gave me insights that boosted my streams by 200%!", image: "/placeholder.svg?height=64&width=64", rating: 5 })] })] }), _jsx(Button, { className: "w-full md:w-auto bg-[#9D5465] hover:bg-[#8A4757] text-white", onClick: function () { return setShowFeedback(true); }, children: "Share Your Feedback" }), showFeedback && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4", children: _jsxs(Card, { className: "w-full max-w-md", children: [loading && _jsx("div", { className: 'flex items-center justify-center rounded-xl w-full h-full absolute top-0 left-0', children: _jsx(LucideLoaderCircle, { className: 'animate-spin w-32 relative z-40', size: 50 }) }), _jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Share Your Experience" }), _jsx(CardDescription, { children: "Help us improve Afromuse Digital" }), (responseMessage && responseMessage.length > 0) && _jsxs(Alert, { className: "bg-green-600 mb-3", children: [_jsx(Terminal, { className: "h-4 w-4 text-white", color: "white" }), _jsx(AlertTitle, { className: "text-white", children: responseMessage })] }), (error && error.length > 0) && _jsxs(Alert, { className: "bg-red-600 mb-3", children: [_jsx(Terminal, { className: "h-4 w-4 text-white", color: "white" }), _jsx(AlertTitle, { className: "text-white", children: error })] })] }), _jsxs(CardContent, { children: [_jsx(Label, { htmlFor: "message", className: "sr-only", children: "Your feedback" }), _jsx("textarea", { value: message, onChange: function (e) { return setMessage(e.target.value); }, id: "message", className: "w-full h-32 p-2 border rounded", placeholder: "Tell us about your experience..." }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "rating", className: "ssr-only mr-2", children: "Your rating" }), _jsx("input", { onChange: function (e) { return setRating(e.target.value); }, id: "rating", value: rating, type: "number", min: 1, max: 5, className: "border-2 rounded-md px-1" })] }), _jsxs("div", { className: "mt-4 flex justify-end space-x-2", children: [_jsx(Button, { variant: "outline", onClick: function () { return setShowFeedback(false); }, children: "Cancel" }), _jsx(Button, { onClick: handleCreateReview, className: "bg-[#9D5465] hover:bg-[#8A4757] text-white", children: "Submit" })] })] })] }) }))] })), screen === 'service' && (_jsx("div", { className: "w-full max-w-4xl", children: renderServiceInterface() }))] })] }));
}
function ServiceCard(_a) {
    var title = _a.title, description = _a.description, icon = _a.icon, credits = _a.credits, onClick = _a.onClick;
    return (_jsxs(Card, { className: "relative overflow-hidden", children: [_jsxs(CardHeader, { className: "pb-0", children: [_jsx("div", { className: "mb-2", children: icon }), _jsx(CardTitle, { className: "text-[#333333]", children: title }), _jsx(CardDescription, { className: "text-[#666666]", children: description })] }), _jsx(CardContent, { className: "mt-4", children: _jsx(Button, { className: "w-full bg-[#9D5465] hover:bg-[#8A4757] text-white", onClick: onClick, children: "Start Now" }) }), _jsxs("div", { className: "absolute top-2 right-2 bg-[#9D5465] text-white text-sm font-semibold py-1 px-2 rounded-full", children: [credits, " Credits"] }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#9D5465]/5 to-[#9D5465]/20 pointer-events-none" })] }));
}
function TestimonialCard(_a) {
    var name = _a.name, quote = _a.quote, image = _a.image, rating = _a.rating;
    return (_jsxs(Card, { className: "overflow-hidden", children: [_jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [_jsxs(Avatar, { className: "h-16 w-16", children: [_jsx(AvatarImage, { src: image, alt: name }), _jsx(AvatarFallback, { children: name[0] })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-[#333333]", children: name }), _jsx("div", { className: "flex", children: __spreadArray([], Array(rating), true).map(function (_, i) { return (_jsx(Star, { className: "h-4 w-4 fill-[#9D5465] text-[#9D5465]" }, i)); }) })] })] }), _jsxs("p", { className: "text-[#666666] italic", children: ["\u201C", quote, "\u201D"] })] }), _jsx("div", { className: "h-2 bg-gradient-to-r from-[#9D5465] to-[#8A4757]" })] }));
}
