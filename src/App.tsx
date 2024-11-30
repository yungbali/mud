import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AppFlow from './app-flow';
import LoginScreen from './components/login';
import SignupScreen from './components/signup';
import { ProtectedRoute } from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <AppFlow />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
