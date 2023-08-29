import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import translationsEn from "./locales/en/translation.json";
import translationsPt from "./locales/pt/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEn },
      pt: { translation: translationsPt },
    },
    lng: "en",
    fallbackLng: "en",
  });

export default i18n;
