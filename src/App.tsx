import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './components/login';
import SignupScreen from './components/signup';
import { MarketingPlans } from './components/marketing-plans';
import { useAuth } from './hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/signup" replace />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        
        {/* Protected Routes */}
        <Route path="/marketing" element={
          <ProtectedRoute>
            <MarketingPlans />
          </ProtectedRoute>
        } />
        
        {/* Redirect root to signup */}
        <Route path="/" element={<Navigate to="/signup" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
