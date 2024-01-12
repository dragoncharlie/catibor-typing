import React from 'react'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Neucha } from 'next/font/google'

const neucha = Neucha({
	weight: '400',
	subsets: ['latin', 'cyrillic'],
	preload: true,
})

export const metadata = {
	title: 'Catibor Typing',
	description: 'Typing game with Catibor',
	metadataBase: new URL('https://catibor-typing.vercel.app/'),
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en-GB'>
			<body className={neucha.className}>
				<div className='flex flex-col min-h-screen'>
					<main className='grow flex flex-col relative'>{children}</main>
				</div>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	)
}

export default RootLayout
