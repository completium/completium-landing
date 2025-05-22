import { useTheme } from "./theme-provider";

// Type union pour toutes les marques disponibles
export type Brand = 
  | "logo" 
  | "n8n" 
  | "replicate" 
  | "pytorch" 
  | "hugging-face" 
  | "langchain" 
  | "tensorflow"
  | "weaviate"
  | "qdrant";

// Props du composant
export interface BrandLogoProps {
  brand: Brand;
  height?: number | string;
  className?: string;
}

// Fonction pour obtenir le nom du fichier SVG en fonction de la marque et du thème
function getLogoPath(brand: Brand, isDark: boolean): string {
  switch (brand) {
    case "logo":
      return isDark ? "/logo-dark.svg" : "/logo-light.svg";
    case "n8n":
      return isDark ? "/n8n-dark.svg" : "/n8n-light.svg"; // Pas de version dark
    case "replicate":
      return isDark ? "/replicate-dark.svg" : "/replicate-light.svg";
    case "pytorch":
      return isDark ? "/pytorch-dark.svg" : "/pytorch-light.svg"; // Pas de version dark
    case "hugging-face":
      return isDark ? "/hugging-face-dark.svg" : "/hugging-face-light.svg"; // Pas de version dark
    case "langchain":
      return isDark ? "/langchain-dark.svg" : "/langchain-light.svg"; // Pas de version dark
    case "tensorflow":
      return isDark ? "/tensorflow-dark.svg" : "/tensorflow-light.svg"; // Pas de version dark
    case "weaviate":
      return isDark ? "/weaviate-dark.svg" : "/weaviate-light.svg"; // Pas de version dark
    case "qdrant":
      return isDark ? "/qdrant-light.svg" : "/qdrant-light.svg"; // Pas de version dark
    default:
      return "";
  }
}

export function BrandLogo({ brand, height = 20, className = "" }: BrandLogoProps) {
  const { theme } = useTheme();
  
  // Déterminer si le thème est sombre
  const isDark = theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  
  // Obtenir le chemin du logo
  const logoPath = getLogoPath(brand, isDark);
  
  // Définir la taille en pixels pour être sûr
  const sizeStyle = {
    height: typeof height === 'number' ? `${height}px` : height,
    maxHeight: typeof height === 'number' ? `${height}px` : height,
  };
  
  return (
    <div 
      style={sizeStyle} 
      className={`inline-flex items-center justify-center w-full ${className}`}
    >
      <img
        src={logoPath}
        alt={`${brand} Logo`}
        className={`h-full w-auto mx-auto`}
      />
    </div>
  );
} 