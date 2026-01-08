import { HelmetProvider } from 'react-helmet-async'
// import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  // </StrictMode>,
)
