import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/login';
import SignupScreen from './components/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
