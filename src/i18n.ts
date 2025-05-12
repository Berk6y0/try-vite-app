// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import tr from './locales/tr.json';

i18n
  .use(LanguageDetector) // tarayıcı dilini otomatik algılar
  .use(initReactI18next) // react-i18next'e bağlanır
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
    },
    fallbackLng: 'en', // desteklenmeyen dil olursa EN göster
    interpolation: {
      escapeValue: false, // React zaten otomatik yapıyor
    },
  });

export default i18n;
