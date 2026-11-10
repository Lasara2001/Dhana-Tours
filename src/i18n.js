import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import ru from './locales/ru.json'

i18n
    .use(LanguageDetector) // finds the visitor's language
    .use(initReactI18next) // connects i18next to React
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
        },
        fallbackLng: 'en', // use English if a language or a text is missing
        supportedLngs: ['en', 'ru'],
        nonExplicitSupportedLngs: true, // treat "ru-RU" as "ru" and "en-US" as "en"
        interpolation: { escapeValue: false }, // React already protects against injected HTML
        detection: {
            order: ['localStorage', 'navigator'], // saved choice first, then browser language
            caches: ['localStorage'],
        },
    })

// Keep <html lang="..."> in sync (good for accessibility and SEO)
document.documentElement.lang = i18n.resolvedLanguage || 'en'
i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng
})

export default i18n