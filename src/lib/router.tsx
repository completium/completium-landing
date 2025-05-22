import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router'
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

// Base path pour GitHub Pages
const basePath = import.meta.env.DEV ? '/' : '/completium-landing/'

// Créez le router avec la configuration pour GitHub Pages
const router = createRouter({ 
  routeTree,
  basepath: basePath, 
  defaultPreload: 'intent'
})

// Typez le router pour TypeScript
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default router 