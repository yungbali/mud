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
import { useState } from 'react';
import { Button } from "./ui/button";
import AiMarketingAdvisorForm from './ai-marketing-advisor-form';
import { AlertDialog, AlertDialogContent, AlertDialogTrigger, } from "./ui/alert-dialog";
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';
import MarkDownDisplay from './react-markdown';
import { BASEURL } from '../util/baseUrl';
// function AlertDialogDemo({ children, onClick, loading }: { children: ReactNode, onClick: () => void, loading: boolean }) {
function AlertDialogDemo(_a) {
    var loading = _a.loading, data = _a.data, error = _a.error, handleSlectInputChange = _a.handleSlectInputChange, handleInputChange = _a.handleInputChange, handleSubmit = _a.handleSubmit, prompt = _a.prompt;
    return (_jsxs(AlertDialog, { children: [_jsx(AlertDialogTrigger, { className: "flex items-center justify-end", asChild: true, children: _jsx("div", { className: 'flex items-center justify-end', children: _jsx(Button, { variant: "outline", onClick: function () {
                        }, children: "Generate New Market Plan" }) }) }), _jsxs(AlertDialogContent, { children: [_jsx(AiMarketingAdvisorForm, { handleSubmit: handleSubmit, prompt: prompt, data: data, error: error, loading: loading, handleInputChange: handleInputChange, handleSlectInputChange: handleSlectInputChange }), _jsx(AlertDialogCancel, { children: "Cancel" })] })] }));
}
var useAiMarketingAdvisor = function () {
    var _a = useState(false), loading = _a[0], setLoading = _a[1];
    var _b = useState(""), error = _b[0], setError = _b[1];
    var _c = useState(""), data = _c[0], setData = _c[1];
    var _d = useState({
        band_name: '',
        genre: '',
        target_audience: '',
        current_followers: '',
        streams: '',
        budget: '',
        advice: '',
        // industry: '',
        // goals: '',
        // usp: '',
        // marketing_channels: '',
        // competitors: '',
        // timeframe: '',
        // brand_voice: '',
        // products_services: '',
        // region: ''
    }), prompt = _d[0], setPrompt = _d[1];
    // const [conversation, setConversation] = useState([])
    // const [userInput, setUserInput] = useState('')
    var handleInputChange = function (e) {
        setPrompt(function (prevPrompt) {
            var _a;
            return (__assign(__assign({}, prevPrompt), (_a = {}, _a[e.target.id] = e.target.value, _a)));
        });
    };
    var handleSlectInputChange = function (value) {
        setPrompt(__assign(__assign({}, prompt), { target_audience: value }));
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, reader, decoder_1, done, _loop_1, err_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setLoading(true);
                    setError("");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch("".concat(BASEURL, "/generate-marketing-advice"), {
                            body: JSON.stringify(prompt),
                            method: 'POST',
                            headers: {
                                Authorization: "Bearer ".concat(localStorage.getItem("musette-jwt"))
                            }
                        })];
                case 2:
                    response = _b.sent();
                    if (!response.ok) return [3 /*break*/, 5];
                    setLoading(false);
                    reader = (_a = response.body) === null || _a === void 0 ? void 0 : _a.getReader();
                    decoder_1 = new TextDecoder();
                    done = false;
                    _loop_1 = function () {
                        var _c, value_1, streamDone;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    if (!reader) return [3 /*break*/, 2];
                                    return [4 /*yield*/, reader.read()];
                                case 1:
                                    _c = _d.sent(), value_1 = _c.value, streamDone = _c.done;
                                    done = streamDone;
                                    if (value_1) {
                                        setData(function (prevData) { return prevData + decoder_1.decode(value_1); }); // Append new chunks
                                    }
                                    _d.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    };
                    _b.label = 3;
                case 3:
                    if (!!done) return [3 /*break*/, 5];
                    return [5 /*yield**/, _loop_1()];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 5: return [3 /*break*/, 7];
                case 6:
                    err_1 = _b.sent();
                    console.log('The error is: ', err_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    return {
        handleSubmit: handleSubmit,
        handleInputChange: handleInputChange,
        handleSlectInputChange: handleSlectInputChange,
        data: data,
        loading: loading,
        error: error,
        prompt: prompt
    };
};
export function AIMarketingAdvisor() {
    // const [conversation, setConversation] = useState([])
    // const [userInput, setUserInput] = useState('')
    // const handleSendMessage = () => {
    //   if (userInput.trim()) {
    //     setConversation([...conversation, { type: 'user', message: userInput }])
    //     // Simulated AI response
    //     setTimeout(() => {
    //       setConversation(prev => [...prev, { type: 'ai', message: "Thank you for your input. I'm analyzing your data and will provide personalized marketing insights shortly." }])
    //     }, 1000)
    //     setUserInput('')
    //   }
    // }
    var _a = useAiMarketingAdvisor(), data = _a.data, prompt = _a.prompt, error = _a.error, handleInputChange = _a.handleInputChange, handleSlectInputChange = _a.handleSlectInputChange, handleSubmit = _a.handleSubmit, loading = _a.loading;
    var uiToShow = data ? 1 : 0;
    if (uiToShow === 0) {
        return (_jsx(AiMarketingAdvisorForm, { handleSubmit: handleSubmit, prompt: prompt, data: data, error: error, loading: loading, handleInputChange: handleInputChange, handleSlectInputChange: handleSlectInputChange }));
    }
    return (_jsxs(_Fragment, { children: [_jsx(AlertDialogDemo, { handleSlectInputChange: handleSlectInputChange, prompt: prompt, data: data, error: error, handleInputChange: handleInputChange, handleSubmit: handleSubmit, loading: loading }), _jsx(MarkDownDisplay, { text: data, title: 'Generate Marketing Advice', btnText: 'Download Advice' }, data)] }));
}
