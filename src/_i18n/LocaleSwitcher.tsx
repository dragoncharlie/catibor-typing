import { i18n as config } from './i18n-config'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

export default function LocaleSwitcher() {
	const { i18n, t } = useTranslation()

	const changeLanguage = (locale: string) => () => {
		void i18n.changeLanguage(locale)
	}

	return (
		<div className='flex items-center gap-16'>
			<Helmet
				htmlAttributes={{
					lang: i18n.language,
					dir: i18n.dir(),
				}}
			/>
			<p>{t('active_locale')}</p>
			<ul className='flex gap-2'>
				{config.locales.map((locale) => {
					return (
						<li key={locale}>
							<button
								className='border px-2 py-1 hover:border-primary-500 hover:text-primary-500'
								onClick={changeLanguage(locale)}
							>
								{t(locale)}
							</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
