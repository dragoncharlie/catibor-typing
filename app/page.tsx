'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import CatiborWindow from '@/components/catibor/CatiborWindow'
import EmailWindow from '@/components/email/EmailWindow'
import StatisticsWindow from '@/components/statistic/StatisticsWindow'
import HelpWindow from '@/components/help/HelpWindow'
import Menu, { windowsType } from '@/components/layout/Menu'

const Home = () => {
	const [animationType, setAnimationType] = useState('default')
	// position in the array shows order of windows, the last one is the focused one
	const [openedWindows, setOpenedWindows] = useState<windowsType[]>([
		'catibor',
		'email',
	])
	const [isCapsOn, setIsCapsOn] = useState(false)

	const checkCapsState = (event: KeyboardEvent) => {
		const caps = event.getModifierState && event.getModifierState('CapsLock')
		setIsCapsOn(caps)
	}

	useEffect(() => {
		document.addEventListener('keydown', checkCapsState)

		return () => document.removeEventListener('keydown', checkCapsState)
	}, [])

	const onClose = (windowName: windowsType) => () => {
		setOpenedWindows((state) => state.filter((name) => name !== windowName))
	}

	const onOpen = (windowName: windowsType) => () => {
		setOpenedWindows((state) => [
			...state.filter((name) => name !== windowName),
			windowName,
		])
	}

	const getLayer = (windowName: windowsType) => {
		const index = openedWindows.indexOf(windowName)
		switch (index) {
			case 1:
				return 'z-10'
			case 2:
				return 'z-20'
			case 3:
				return 'z-30'

			default:
				return 'z-0'
		}
	}

	const focusedWindow = openedWindows[openedWindows.length - 1]

	return (
		<>
			<div className='select-none fixed bg-[url("/wallpaper_base.png")] bg-repeat-x bg-contain max-h-[720px] top-[calc(50%_-_20px)] -translate-y-1/2 left-0 right-0 flex justify-center'>
				<Image
					className='object-contain -translate-x-1/4'
					src='/wallpaper.png'
					alt=''
					width={896}
					height={1440}
				/>
			</div>
			<div className='container py-16 md:py-32 grow flex flex-col'>
				<div className='desktop grow m-auto w-full relative max-h-[1080px]'>
					{openedWindows.includes('email') && (
						<EmailWindow
							focused={focusedWindow === 'email'}
							layer={getLayer('email')}
							onFocus={onOpen('email')}
							setAnimationType={setAnimationType}
							onClose={onClose('email')}
							isCapsOn={isCapsOn}
						/>
					)}
					{openedWindows.includes('catibor') && (
						<CatiborWindow
							focused={focusedWindow === 'catibor'}
							layer={getLayer('catibor')}
							onClose={onClose('catibor')}
							onFocus={onOpen('catibor')}
							type={animationType}
							isCapsOn={isCapsOn}
						/>
					)}
					{openedWindows.includes('statistic') && (
						<StatisticsWindow
							focused={focusedWindow === 'statistic'}
							layer={getLayer('statistic')}
							onFocus={onOpen('statistic')}
							onClose={onClose('statistic')}
							updateFlag={animationType}
						/>
					)}
					{openedWindows.includes('help') && (
						<HelpWindow
							focused={focusedWindow === 'help'}
							layer={getLayer('help')}
							onFocus={onOpen('help')}
							onClose={onClose('help')}
						/>
					)}
				</div>
			</div>
			<Menu onOpen={onOpen} />
		</>
	)
}

export default Home
