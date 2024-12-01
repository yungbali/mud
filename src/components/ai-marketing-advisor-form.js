import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ChevronLeft, ChevronRight, LucideLoaderCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
var AiMarketingAdvisorForm = function (_a) {
    var loading = _a.loading, handleInputChange = _a.handleInputChange, handleSlectInputChange = _a.handleSlectInputChange, handleSubmit = _a.handleSubmit, prompt = _a.prompt;
    var _b = useState(1), step = _b[0], setStep = _b[1];
    var nextStep = function () { return setStep(step + 1); };
    var prevStep = function () { return setStep(step - 1); };
    // const [conversation, setConversation] = useState<{type: string; message: string;}[]>([])
    // const [userInput, setUserInput] = useState('')
    // const handleSendMessage = () => {
    //     if (userInput.trim()) {
    //         setConversation([...conversation, { type: 'user', message: userInput }])
    //         // Simulated AI response
    //         setTimeout(() => {
    //             setConversation(prev => [...prev, { type: 'ai', message: "Thank you for your input. I'm analyzing your data and will provide personalized marketing insights shortly." }])
    //         }, 1000)
    //         setUserInput('')
    //     }
    // }
    return (_jsx(_Fragment, { children: _jsxs(Card, { className: "w-full max-w-2xl mx-auto ".concat(loading ? "after:rounded-xl after:w-full after:h-full after:bg-[rgba(0,0,0,.1)] after:block after:blur-lg after:absolute after:top-0 after:left-0 after:z-50" : ""), children: [loading && _jsx("div", { className: 'flex items-center justify-center rounded-xl w-full h-full absolute top-0 left-0', children: _jsx(LucideLoaderCircle, { className: 'animate-spin w-32 relative z-40', size: 50 }) }), _jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-2xl font-bold text-[#333333]", children: "AI Marketing Advisor" }), _jsx(CardDescription, { children: "Get personalized marketing insights powered by AI" })] }), _jsxs(CardContent, { children: [step === 1 && (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "band_name", children: "Artist/Band Name" }), _jsx(Input, { onChange: handleInputChange, value: prompt.band_name, id: "band_name", placeholder: "Enter your artist or band name" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "genre", children: "Primary Genre" }), _jsx(Input, { onChange: handleInputChange, value: prompt.genre, id: "genre", placeholder: "e.g., Afrobeats, Hip-Hop, Jazz" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "target-audience", children: "Target Audience" }), _jsxs(Select, { onValueChange: handleSlectInputChange, value: prompt.target_audience, children: [_jsx(SelectTrigger, { id: "target_audience", children: _jsx(SelectValue, { placeholder: "Select your target audience" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "18-24", children: "18-24 years old" }), _jsx(SelectItem, { value: "25-34", children: "25-34 years old" }), _jsx(SelectItem, { value: "35-44", children: "35-44 years old" }), _jsx(SelectItem, { value: "45+", children: "45+ years old" })] })] })] })] })), step === 2 && (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "current_followers", children: "Current Followers" }), _jsx(Input, { onChange: handleInputChange, value: prompt.current_followers, id: "current_followers", type: "number", placeholder: "Enter your current number of followers" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "streams", children: "Monthly Streams" }), _jsx(Input, { onChange: handleInputChange, value: prompt.streams, id: "streams", type: "number", placeholder: "Enter your average monthly streams" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "budget", children: "Monthly Marketing Budget (USD)" }), _jsx(Input, { onChange: handleInputChange, value: prompt.budget, id: "budget", type: "number", placeholder: "Enter your monthly marketing budget" })] })] }))] }), _jsxs(CardFooter, { className: "flex justify-between", children: [step > 1 && (_jsxs(Button, { onClick: prevStep, variant: "outline", children: [_jsx(ChevronLeft, { className: "mr-2 h-4 w-4" }), " Previous"] })), step < 2 ? (_jsxs(Button, { onClick: nextStep, className: "ml-auto bg-[#9D5465] hover:bg-[#8A4757] text-white", children: ["Next ", _jsx(ChevronRight, { className: "ml-2 h-4 w-4" })] })) : (_jsx(Button, { onClick: handleSubmit, className: "ml-auto bg-[#9D5465] hover:bg-[#8A4757] text-white", children: "Finish" }))] })] }) }));
};
export default AiMarketingAdvisorForm;
