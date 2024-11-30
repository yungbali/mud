import AppFlow from './app-flow';
import {Route, Routes,BrowserRouter} from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import config from '../amplify_outputs.json';

import './App.css'
import LoginScreen from './components/login';
import SignupScreen from './components/signup';

// Configure Amplify with the generated outputs
Amplify.configure(config);

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppFlow />} />
        <Route path='/signup' element={<SignupScreen />} />
        <Route path='/login' element={<LoginScreen />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
