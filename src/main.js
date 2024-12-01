import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import App from './App';
import './index.css';
// Configure Amplify with the outputs from your backend
Amplify.configure(outputs);
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(App, {}) }));
