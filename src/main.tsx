import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Amplify } from 'aws-amplify'
import config from '../amplify/config.json'
import App from './App'
import './index.css'

// Configure Amplify with the outputs from your backend
Amplify.configure(config)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
