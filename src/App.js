import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AppFlow from './app-flow';
import LoginScreen from './components/login';
import SignupScreen from './components/signup';
import { ProtectedRoute } from './components/ProtectedRoute';
import './App.css';
function App() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(LoginScreen, {}) }), _jsx(Route, { path: "/signup", element: _jsx(SignupScreen, {}) }), _jsx(Route, { path: "/", element: _jsx(ProtectedRoute, { children: _jsx(AppFlow, {}) }) })] }) }));
}
export default App;
