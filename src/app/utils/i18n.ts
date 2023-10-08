import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import LanguageDetector from 'i18next-browser-languagedetector'

import translationsEn from './locales/en/translation.json'
import translationsPt from './locales/pt/translation.json'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'pt-BR',
    resources: {
      'en-US': translationsEn,
      'pt-BR': translationsPt,
    },
    detection: {
      order: ['queryString', 'cookies'],
      caches: ['cookie'],
    },
  })

export default i18n
