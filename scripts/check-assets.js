// Script pour vérifier les chemins d'accès dans les fichiers HTML après le build
import fs from 'fs';
import path from 'path';

const distDir = path.resolve('./dist');
const basePath = '/';

function checkHtmlFiles(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      checkHtmlFiles(filePath);
    } else if (file.endsWith('.html')) {
      console.log(`Vérification de ${filePath}`);
      
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Vérifier les éléments <img> sans le préfixe de base
      const imgSrcRegex = /<img[^>]*src=["'](?!\/?http)\/([^"']+)["'][^>]*>/g;
      let match;
      
      while ((match = imgSrcRegex.exec(content)) !== null) {
        console.log(`⚠️ Image avec chemin absolu sans préfixe: ${match[0]}`);
      }
      
      // Vérifier les liens <a> sans le préfixe de base
      const hrefRegex = /<a[^>]*href=["'](?!\/?http|mailto:|tel:)\/([^"']+)["'][^>]*>/g;
      
      while ((match = hrefRegex.exec(content)) !== null) {
        console.log(`⚠️ Lien avec chemin absolu sans préfixe: ${match[0]}`);
      }
      
      // Vérifier les fichiers CSS et JS
      const assetRegex = /(href|src)=["'](?!\/?http)\/([^"']+)["']/g;
      
      while ((match = assetRegex.exec(content)) !== null) {
        console.log(`⚠️ Asset avec chemin absolu sans préfixe: ${match[0]}`);
      }
    }
  });
}

console.log('Vérification des chemins d\'accès dans les fichiers HTML générés...');
checkHtmlFiles(distDir);
console.log('Vérification terminée !'); 