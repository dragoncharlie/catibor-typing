import ThemeSwitcher from '@/_themes/ThemeSwitcher.tsx'
import LocaleSwitcher from '@/_i18n/LocaleSwitcher.tsx'

export default function Home() {
	return (
		<div>
			<div className='mb-8'>
				<ThemeSwitcher />
			</div>
			<div className='mb-8'>
				<LocaleSwitcher />
			</div>
			<p>It's Home, Sweet Home</p>
		</div>
	)
}
