import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
export function ProtectedRoute(_a) {
    var children = _a.children;
    var _b = useAuth(), user = _b.user, loading = _b.loading;
    if (loading) {
        return _jsx("div", { children: "Loading..." });
    }
    if (!user) {
        return _jsx(Navigate, { to: "/login", replace: true });
    }
    return _jsx(_Fragment, { children: children });
}
