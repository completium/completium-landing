import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router'
import React from 'react'
import App from '../App'

// Créez la route racine
const rootRoute = createRootRoute()

// Route d'index (page principale)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App
})

// Définissez vos routes ici
const routeTree = rootRoute.addChildren([indexRoute])

// Créez le router
const router = createRouter({ routeTree })

// Typez le router pour TypeScript
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default router 