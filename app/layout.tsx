import React from 'react'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Neucha } from 'next/font/google'
const neucha = Neucha({ weight: '400', subsets: ['latin', 'cyrillic'], preload: true })

export const metadata = {
  title: 'Catibor Typing',
  description: 'Typing game with Catibor',
}

const RootLayout = ({children}: { children: React.ReactNode }) => {

  return (
    <html lang='en'>
      <body className={neucha.className}>
        <div className='flex flex-col min-h-screen'>
          <main className='grow flex flex-col pt-16 pb-16 relative'>
            <div className='container grow flex flex-col'>
              {children}
            </div>
          </main>
        </div>
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout
