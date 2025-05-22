// Définition du chemin de base pour les ressources statiques en fonction de l'environnement
export const BASE_PATH = import.meta.env.DEV ? '' : ''

// Fonction utilitaire pour construire des URLs avec le bon préfixe
export function getAssetPath(path: string): string {
  // Si le chemin commence déjà par http ou https, on le retourne tel quel
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  
  // Si le chemin commence par un slash, on le normalise
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  // On retourne le chemin avec le préfixe de base
  return `${BASE_PATH}${normalizedPath}`
} 