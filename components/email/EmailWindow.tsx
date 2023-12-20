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
}

const EmailWindow = ({
	onFocus,
	setAnimationType,
	onClose,
	layer,
	focused,
}: EmailWindowProps) => {
	const [isStarted, setIsStarted] = useState(false)
	const [isPaused, setIsPaused] = useState(false)
	const stopGame = () => {
		setIsStarted(false)
		onClose()
	}

	return (
		<Window
			className={`absolute top-0 left-0 xl:left-auto xl:right-1/2 max-w-[520px] w-3/5 lg:w-1/2 ${layer} h-[calc(60vh)] lg:h-[calc(100%_-_64px)] max-h-[620px]`}
			title={`mail.exe ${isPaused ? '(paused)' : ''}`}
			focused={focused}
			onClose={stopGame}
			onFocus={onFocus}
		>
			{!isStarted && <EmailStart onStart={() => setIsStarted(true)} />}
			{isStarted && (
				<EmailGame
					setIsPaused={setIsPaused}
					setAnimationType={setAnimationType}
				/>
			)}
		</Window>
	)
}

export default EmailWindow
