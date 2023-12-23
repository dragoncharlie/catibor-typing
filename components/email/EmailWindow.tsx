import React, { useState } from 'react'

import EmailStart from '@/components/email/EmailStart'
import EmailGame from '@/components/email/EmailGame'
import Window from '@/components/Window'

type EmailWindowProps = {
	onFocus: () => void
	onClose: () => void
	setAnimationType: (type: string) => void
	layer: string
	focused: boolean
	isCapsOn: boolean
}

const EmailWindow = ({
	onFocus,
	setAnimationType,
	onClose,
	layer,
	focused,
	isCapsOn,
}: EmailWindowProps) => {
	const [lang, setLang] = useState('')
	const [isPaused, setIsPaused] = useState(false)

	const stopGame = () => {
		setLang('')
		onClose()
	}

	const onStart = (lang: string) => () => {
		setLang(lang)
	}

	return (
		<Window
			className={`absolute top-0 left-0 xl:left-auto xl:right-1/2 max-w-[520px] w-3/5 lg:w-1/2 ${layer} h-[calc(60vh)] lg:h-[calc(100%_-_64px)] max-h-[620px]`}
			title={`mail.exe ${isPaused ? '(paused)' : ''}`}
			focused={focused}
			onClose={stopGame}
			onFocus={onFocus}
		>
			{lang && (
				<button
					onClick={() => setLang('')}
					className={`button absolute top-[3px] right-48 w-24 h-24 min-w-0 p-0 text-16 z-10 ${
						focused
							? 'border-surface-900 text-surface-900'
							: 'border-surface-600 text-surface-600'
					}`}
					type='button'
					title='Restart the game'
				>
					{'<-'}
				</button>
			)}
			{!lang && <EmailStart onStart={onStart} />}
			{lang && (
				<EmailGame
					setIsPaused={setIsPaused}
					setAnimationType={setAnimationType}
					lang={lang}
					isCapsOn={isCapsOn}
				/>
			)}
		</Window>
	)
}

export default EmailWindow
