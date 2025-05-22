import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import frTranslation from '../locales/fr/translation.json';
import enTranslation from '../locales/en/translation.json';

// Options pour le détecteur de langue
const languageDetectorOptions = {
  // Ordre des détections à utiliser
  order: ['navigator'],
  // Ne détecte que les langues prises en charge (fr, en)
  checkWhitelist: true
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: frTranslation
      },
      en: {
        translation: enTranslation
      }
    },
    fallbackLng: 'en', // Langue par défaut si aucune correspondance
    supportedLngs: ['fr', 'en'], // Langues supportées
    detection: languageDetectorOptions,
    debug: import.meta.env.DEV,
    
    // Utiliser un adaptateur pour transformer 'fr-FR', 'fr-CA', etc. en 'fr'
    load: 'languageOnly',
    
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n; 