import index_en from './locales/en/index.json'
import index_ru from './locales/ru/index.json'

const locales = {
	en: 'English',
	ru: 'Русский',
}

const resources = {
	en: {
		index: { ...index_en, ...locales },
	},
	ru: {
		index: { ...index_ru, ...locales },
	},
}

export default resources
