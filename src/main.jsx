import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_SECRET_KEY

console.log('Environment variables:', import.meta.env)
console.log('PUBLISHABLE_KEY:', PUBLISHABLE_KEY)

if (!PUBLISHABLE_KEY) {
  console.error('Missing VITE_CLERK_SECRET_KEY environment variable')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </StrictMode>
)
