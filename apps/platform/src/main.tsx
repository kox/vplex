import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import '@repo/ui/styles.css'
import routes from './config/routes'
import { ContextProvider } from '@repo/ui/components/providers/context'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={routes} />
    </ContextProvider>
  </StrictMode>,
)
