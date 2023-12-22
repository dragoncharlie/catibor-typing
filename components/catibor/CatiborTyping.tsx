import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const LEFT_PAW = [
	'q',
	'w',
	'e',
	'r',
	't',
	'a',
	's',
	'd',
	'f',
	'g',
	'z',
	'x',
	'c',
	'v',
	'b',
	'backquote',
	'1',
	'2',
	'3',
	'4',
	'5',
	'space',
]
const RIGHT_PAW = [
	'y',
	'u',
	'i',
	'o',
	'p',
	'bracketleft',
	'bracketright',
	'h',
	'j',
	'k',
	'l',
	'semicolon',
	'quote',
	'n',
	'm',
	'comma',
	'period',
	'slash',
	'6',
	'7',
	'8',
	'9',
	'0',
	'minus',
	'equal',
	'backspace',
	'space',
]

const getKey = (event: KeyboardEvent) => {
	return event.code.toLowerCase().replace('key', '').replace('digit', '')
}

type CatiborAnimationProps = {
	type: string
	onImageLoad: (img: string) => () => void
}

const imageClassName =
	'absolute bottom-0 right-0 max-h-full object-right-bottom object-contain'

const CatibirTyping = ({ type, onImageLoad }: CatiborAnimationProps) => {
	const [leftPaw, setLeftPaw] = useState(0)
	const [rightPaw, setRightPaw] = useState(0)
	let left = 0
	let right = 0
	let pressed: { [key: string]: boolean } = {}

	const onKeyDown = (event: KeyboardEvent) => {
		const key = getKey(event)
		if (pressed[key]) return

		pressed[key] = true
		if (RIGHT_PAW.includes(key)) {
			right++
			setRightPaw(right)
		}
		if (LEFT_PAW.includes(key)) {
			left++
			setLeftPaw(left)
		}
	}

	const onKeyUp = (event: KeyboardEvent) => {
		const key = getKey(event)
		if (!pressed[key]) return

		pressed[key] = false
		if (RIGHT_PAW.includes(key)) {
			right--
			setRightPaw(right)
		}
		if (LEFT_PAW.includes(key)) {
			left--
			setLeftPaw(left)
		}
	}

	const removeListeners = () => {
		document.removeEventListener('keydown', onKeyDown)
		document.removeEventListener('keyup', onKeyUp)

		left = 0
		right = 0
		setRightPaw(0)
		setLeftPaw(0)
		pressed = {}
	}

	useEffect(() => {
		if (type === 'typing') {
			document.addEventListener('keydown', onKeyDown)
			document.addEventListener('keyup', onKeyUp)
		} else {
			removeListeners()
		}

		return () => {
			removeListeners()
		}
	}, [type])

	const isTyping = ['default', 'typing'].includes(type)

	return (
		<>
			<Image
				className={`${imageClassName} ${
					rightPaw || !isTyping ? 'opacity-0' : 'opacity-100'
				}`}
				src='/typing-animation/right_up.png'
				alt=''
				width={1472}
				height={992}
				onLoad={onImageLoad('right_up')}
			/>
			<Image
				className={`${imageClassName} ${
					!rightPaw || !isTyping ? 'opacity-0' : 'opacity-100'
				}`}
				src='/typing-animation/right_down.png'
				alt=''
				width={1472}
				height={992}
				onLoad={onImageLoad('right_down')}
			/>
			<Image
				className={`${imageClassName} ${
					!isTyping ? 'opacity-0' : 'opacity-100'
				}`}
				// it's not optimized because apng loses animation
				unoptimized
				src='/typing-animation/body.png'
				alt=''
				width={1472}
				height={992}
				onLoad={onImageLoad('body')}
			/>
			<Image
				className={`${imageClassName} ${
					leftPaw || !isTyping ? 'opacity-0' : 'opacity-100'
				}`}
				src='/typing-animation/left_up.png'
				alt=''
				width={1472}
				height={992}
				onLoad={onImageLoad('left_up')}
			/>
			<Image
				className={`${imageClassName} ${
					!leftPaw || !isTyping ? 'opacity-0' : 'opacity-100'
				}`}
				src='/typing-animation/left_down.png'
				alt=''
				width={1472}
				height={992}
				onLoad={onImageLoad('left_down')}
			/>
			<Image
				className={`${imageClassName} ${
					!isTyping ? 'opacity-0' : 'opacity-100'
				}`}
				src='/typing-animation/whiskers.png'
				alt=''
				width={1472}
				height={992}
				onLoad={onImageLoad('whiskers')}
			/>
		</>
	)
}

export default CatibirTyping
