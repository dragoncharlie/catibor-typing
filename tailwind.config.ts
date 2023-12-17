import type { Config } from 'tailwindcss'

const config: Config = {
  // darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      'body': ['Neucha', 'cursive']
    },
    colors: {

      surface: {
        50: '#FFFFFF',
        100: '#FBFBFE',
        200: '#F6F6F8',
        300: '#E7E7E9',
        400: '#C3C3C5',
        500: '#A5A5A7',
        600: '#7B7B7D',
        700: '#676769',
        800: '#48484A',
        900: '#000000',
      },

      transparent: 'transparent',
      primary: '#E60071',

      success: '#55B627',
      error: '#DE0000',
      warning: '#FF9A00',
    },
    fontSize: {
      48: '48px',
      32: '32px',
      24: '24px',
      18: '18px',
      16: '16px',
      14: '14px',
      12: '12px',
    },
    lineHeight: {
      150: '150%',
      140: '140%',
      130: '130%',
      120: '120%',
      100: '100%',
    },
    spacing: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      28: '28px',
      32: '32px',
      36: '36px',
      40: '40px',
      44: '44px',
      48: '48px',
      52: '52px',
      56: '56px',
      60: '60px',
      64: '64px',
      72: '72px',
      92: '92px',
      128: '128px'
    }
  },
  plugins: [],
}
export default config
