import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from './resourses.ts'
import { i18n as config } from './i18n-config.ts'
import LanguageDetector from 'i18next-browser-languagedetector'

void i18n
	.use(LanguageDetector)
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		defaultNS: 'index',
		resources,
		fallbackLng: config.defaultLocale,
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	})

export default i18n
