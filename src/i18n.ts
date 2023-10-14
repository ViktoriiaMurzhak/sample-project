import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJson from './locales/en/en.json';
import uaJson from './locales/ua/ua.json';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    ...enJson,
  },
  ua: {
    ...uaJson,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,

    interpolation: {
      escapeValue: false,
    },
    fallbackLng: 'en',
  });

export default i18n;
