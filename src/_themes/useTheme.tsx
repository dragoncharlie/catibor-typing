import { useCallback, useContext, useEffect } from 'react'
import ThemeContext from '@/_themes/ThemeContext.tsx'

export const getDefaultTheme = () => {
	const MEDIA = '(prefers-color-scheme: dark)'
	const media = window.matchMedia(MEDIA)
	const storageTheme = localStorage.getItem('theme')

	if (storageTheme && storageTheme !== 'system') return storageTheme

	if (media.matches) {
		return 'dark'
	} else {
		return 'light'
	}
}

const useTheme = () => {
	const MEDIA = '(prefers-color-scheme: dark)'
	const { setTheme } = useContext(ThemeContext)

	const changeThemeHandler = (value: string) => {
		localStorage.setItem('theme', value)
	}

	const systemThemeChangeHandler = useCallback(() => {
		setTheme(getDefaultTheme())
		changeThemeHandler('system')
	}, [])

	useEffect(() => {
		const storageTheme = localStorage.getItem('theme')
		if (!storageTheme || storageTheme === 'system') {
			systemThemeChangeHandler()
			window
				.matchMedia(MEDIA)
				.addEventListener('change', systemThemeChangeHandler)
		} else {
			setTheme(storageTheme)
		}
	}, [])

	return null
}

export default useTheme
