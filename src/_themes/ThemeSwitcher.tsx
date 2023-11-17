import { useContext } from 'react'
import ThemeContext from '@/_themes/ThemeContext.tsx'

const ThemeSwitcher = () => {
	const { theme, setTheme } = useContext(ThemeContext)

	const changeTheme = (value: string) => {
		setTheme(value)
		localStorage.setItem('theme', value)
	}

	return (
		<button
			onClick={() =>
				theme == 'dark' ? changeTheme('light') : changeTheme('dark')
			}
			className='bg-surface-300 dark:bg-surface-50 hover:bg-surface-400 dark:hover:bg-surface-300 transition-all duration-100 text-white dark:text-surface-800 px-4 py-2 text-2xl'
		>
			Toggle Theme
		</button>
	)
}

export default ThemeSwitcher
