import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { SoundProvider } from './context/SoundContext.jsx'
import './index.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <SoundProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </SoundProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
)
