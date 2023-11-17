import { createContext } from 'react'

const ThemeContext = createContext({
	theme: 'light',
	setTheme: Function,
})

export default ThemeContext
