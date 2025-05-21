import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from '@tanstack/react-router'
import router from './lib/router'
import './lib/i18n'
import { ThemeProvider } from './components/theme-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="completium-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
