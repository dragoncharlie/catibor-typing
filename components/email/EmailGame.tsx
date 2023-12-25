import React, { useEffect, useRef, useState } from 'react'

import EmailFinish from '@/components/email/EmailFinish'
import { generateText, getRandomInt } from '@/utils/randomizer'
import emails from '@/utils/emails.json'

type Stat = {
	accuracy: string
	time: number
	cpm: number
	wpm: number
	errors: number
}

type EmailGameProps = {
	setAnimationType: (type: string) => void
	setIsPaused: (paused: boolean) => void
	lang: string
	isCapsOn: boolean
}

const EmailGame = ({
	setAnimationType,
	setIsPaused,
	lang,
	isCapsOn,
}: EmailGameProps) => {
	// start game
	const [startTime, setStartTime] = useState<Date | null>(null)
	const [email, setEmail] = useState(['meow'])

	// in progress game
	const [typedCharacters, setTypedCharacters] = useState(0)
	const [currentWordIndex, setCurrentWordIndex] = useState(0)
	const [input, setInput] = useState('')
	const [correctInput, setCorrectInput] = useState('')

	// pause
	const [pausedTime, setPausedTime] = useState<Date | null>(null)

	// finish game
	const [stat, setStat] = useState<Stat | null>(null)

	useEffect(() => {
		if (pausedTime) {
			setIsPaused(true)
		} else {
			setIsPaused(false)
		}
	}, [pausedTime])

	// start game
	const startGame = () => {
		let text: string

		if (lang === 'meow') {
			text = generateText()
		} else {
			const emailIndex = getRandomInt(emails.length)
			text = emails[emailIndex]
		}

		// filter and map in case if there are extra spaces
		const formattedEmail = text
			.trim()
			.split(' ')
			.map((word) => word.trim())
			.filter((word) => !!word)
		setEmail(formattedEmail)

		setAnimationType('default')
		setInput('')
		setCorrectInput('')
		setCurrentWordIndex(0)
		setTypedCharacters(0)
		setStartTime(null)
		setStat(null)
	}

	useEffect(() => {
		startGame()
		setAnimationType('typing')
	}, [])

	// in progress game
	const currentWordRef = useRef<HTMLSpanElement>(null)

	useEffect(() => {
		if (currentWordRef.current) {
			currentWordRef.current.scrollIntoView({ block: 'center' })
		}
	}, [currentWordIndex])

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!startTime) setStartTime(new Date())

		const value = e.target.value
		const currentWord = email[currentWordIndex]

		if (value.length > input.length) {
			setTypedCharacters((state) => state + 1)
		}

		if (currentWord === value.trim() && currentWord !== value) {
			setCurrentWordIndex(currentWordIndex + 1)
			setInput('')
			setCorrectInput('')
		} else if (value !== input) {
			setInput(value)
			if (currentWord.startsWith(value)) {
				setCorrectInput(value)
			}
		}

		if (value === currentWord && currentWordIndex === email.length - 1) {
			endGame()
		}
	}

	const inputRef = useRef<HTMLInputElement>(null)
	const onAreaClick = () => {
		inputRef.current!.focus()
	}

	const onFocus = () => {
		if (pausedTime && startTime) {
			const difference = pausedTime.getTime() - startTime.getTime()
			setStartTime(new Date(new Date().getTime() - difference))
			setPausedTime(null)
		}
		setAnimationType('typing')
	}
	const onBlur = () => {
		if (startTime) {
			setPausedTime(new Date())
		}
		setAnimationType('default')
	}

	// finish game
	const recordStat = () => {
		const emailLength = email.join(' ').length - 1
		const time = (new Date().getTime() - startTime!.getTime()) / 1000
		const errors = typedCharacters - emailLength
		const accuracy = ((emailLength / typedCharacters) * 100).toFixed(2)
		const cpm = Math.round((typedCharacters / time) * 60)
		const wpm = Math.round((typedCharacters / 5 / time) * 60)
		setStat({ time, errors, cpm, wpm, accuracy })

		let stats = []
		const lsStats = localStorage.getItem(lang)
		if (lsStats) {
			stats = JSON.parse(lsStats)
		}
		stats.push({ wpm, cpm, accuracy, date: new Date() })
		stats.sort((a: Stat, b: Stat) => (a.cpm > b.cpm ? -1 : 1))
		localStorage.setItem(lang, JSON.stringify(stats.slice(0, 10)))
	}

	const endGame = () => {
		recordStat()
		setPausedTime(null)
		setAnimationType('finish')
	}

	if (stat) return <EmailFinish stat={stat} onRestart={startGame} />

	return (
		<>
			<div className='border-b-2 w-full top-0 left-0 text-12 px-16 py-2 flex gap-16 justify-between items-center'>
				<div>
					<p>
						<span className='text-surface-800'>To:</span> important@client.com
					</p>
					<p>
						<span className='text-surface-800'>From:</span> catibor@aspirity.com
					</p>
				</div>
				{isCapsOn && <p className='text-16'>Caps Lock!</p>}
			</div>
			<button
				className='grow overflow-hidden relative text-start tracking-[.2em]'
				onClick={onAreaClick}
				type='button'
			>
				<div className='h-full overflow-auto p-16'>
					<p>
						{!!currentWordIndex &&
							email.slice(0, currentWordIndex).map((word, index) => (
								<span
									key={`${word}${index}`}
									className={`${
										index < currentWordIndex && 'text-surface-900'
									}`}
								>
									{word}{' '}
								</span>
							))}
						<span className='whitespace-nowrap' ref={currentWordRef}>
							<span className='underline font-bold text-surface-900'>
								{email[currentWordIndex].slice(0, correctInput.length)}
							</span>
							<span className='underline font-bold text-surface-50 bg-error'>
								{email[currentWordIndex].slice(
									correctInput.length,
									input.length,
								)}
							</span>
							<span className='underline font-bold text-error whitespace-break-spaces'>
								{input.slice(email[currentWordIndex].length)}
							</span>
							<span className='underline font-bold text-surface-600 relative'>
								<span className='absolute text-surface-900 -left-[3px] animate-blink'>
									|
								</span>
								{email[currentWordIndex].slice(input.length)}
							</span>
						</span>
						{email.slice(currentWordIndex + 1).map((word, index) => (
							<span className='text-surface-600' key={`${word}${index}`}>
								{' '}
								{word}
							</span>
						))}
					</p>
				</div>
				{pausedTime && (
					<div className='bg-surface-50/50 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center hover:text-primary backdrop-blur-sm'>
						<p>Click here to resume</p>
					</div>
				)}
			</button>
			<input
				autoFocus
				className='opacity-0 w-0 h-0 absolute'
				onFocus={onFocus}
				onBlur={onBlur}
				value={input}
				onChange={onChange}
				ref={inputRef}
			/>
		</>
	)
}

export default EmailGame
