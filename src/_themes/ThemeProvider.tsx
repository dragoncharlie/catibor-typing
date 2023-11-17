import { useState } from 'react'
import ThemeContext from './ThemeContext.tsx'

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const [theme, setTheme] = useState('light')

	const changeTheme = (newTheme: string) => {
		setTheme(newTheme)

		document.documentElement.removeAttribute('class')
		document.documentElement.classList.add(newTheme)
	}

	return (
		// @ts-ignore
		<ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
