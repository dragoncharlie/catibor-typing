import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import Window from '@/components/Window'
import CatiborTyping from '@/components/catibor/CatiborTyping'

type CatiborAnimationProps = {
	type: string
	onFocus: () => void
	onClose: () => void
	layer: string
	focused: boolean
}

const imageClassName =
	'absolute bottom-0 right-0 max-h-full object-right-bottom object-contain'

const baseImages = [
	'table',
	'body',
	'right_up',
	'right_down',
	'left_up',
	'left_down',
	'whiskers',
]
const hiddenImages = ['angry', 'shocked', 'sad']

const CatiborWindow = ({
	type,
	onFocus,
	onClose,
	layer,
	focused,
}: CatiborAnimationProps) => {
	// to preload hidden images, but hide them from code after that
	const [loadedImages, setLoadedImages] = useState<string[]>([])
	const [boop, setBoop] = useState<NodeJS.Timeout | null>(null)
	const [closeCount, setCloseCount] = useState(0)
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
	const [closed, setClosed] = useState<boolean | null>(null)

	useEffect(() => {
		setClosed(!!localStorage.getItem('...'))
	}, [])

	const onBoop = () => {
		const id = setTimeout(() => {
			setBoop(null)
		}, 1000)
		setBoop(id)
	}

	useEffect(() => {
		if (type === 'typing') {
			setCloseCount(0)
		}
	}, [type])

	const cancelClose = () => {
		setCloseCount(-1)
		setTimeout(() => {
			setCloseCount(0)
		}, 2000)
	}

	const onTryClose = () => {
		if (closed) {
			onClose()
		} else if (closeCount < 3) {
			onFocus()
			setCloseCount(closeCount + 1)
			if (timeoutId) {
				clearTimeout(timeoutId)
			}
			const id = setTimeout(() => {
				cancelClose()
			}, 10000)
			setTimeoutId(id)
		} else if (closeCount === 3) {
			setCloseCount(closeCount + 1)
			if (timeoutId) {
				clearTimeout(timeoutId)
			}
			localStorage.setItem('...', '...')
			setTimeout(() => {
				onClose()
			}, 1000)
		}
	}

	const onImageLoad = (img: string) => () => {
		setLoadedImages((state) => [...state, img])
	}

	const isBaseInit =
		loadedImages.filter((img) => baseImages.includes(img)).length ===
			baseImages.length && closed !== null
	const isHiddenInit =
		loadedImages.filter((img) => hiddenImages.includes(img)).length ===
		hiddenImages.length

	return (
		<Window
			className={`absolute bottom-0 right-0 xl:left-[45%] max-w-[740px] w-[calc(100%_-_72px)] max-h-[calc(100vh_-_56px_-_56px_-_32px)] ${layer}`}
			focused={focused}
			title={
				<>
					catibor.exe{' '}
					{!closed && type === 'finish' && (
						<span className='ml-4'>(not working)</span>
					)}
				</>
			}
			onClose={onTryClose}
			onFocus={onFocus}
		>
			<div className='grow relative'>
				{!isBaseInit && (
					<div className='absolute top-0 left-0 bottom-0 right-0 bg-surface-50 flex justify-end items-end z-10 p-16'>
						<p>Catibor is loading...</p>
					</div>
				)}
				<div className='pointer-events-none z-0 relative flex justify-end items-end select-none'>
					{/* desk */}
					<Image
						className='max-h-full object-right-bottom object-contain'
						src='/typing-animation/table.png'
						alt=''
						width={1472}
						height={992}
						onLoad={onImageLoad('table')}
					/>
					{!closed && (
						<>
							{/* finish */}
							<Image
								className={`${imageClassName} ${
									closeCount > 0 || type !== 'finish'
										? 'opacity-0'
										: 'opacity-100'
								}`}
								// it's not optimized because apng loses animation
								unoptimized
								src='/typing-animation/sleep.png'
								alt=''
								width={1472}
								height={992}
							/>

							{/* default + typing */}
							<CatiborTyping
								type={closeCount > 0 ? '' : type}
								onImageLoad={onImageLoad}
							/>

							{/* closing */}
							{(!isHiddenInit || !!closeCount) && (
								<>
									<Image
										className={`${imageClassName} ${
											closeCount !== 1 ? 'opacity-0' : 'opacity-100'
										}`}
										src='/typing-animation/shocked.png'
										alt=''
										width={1472}
										height={992}
										onLoad={onImageLoad('shocked')}
									/>
									<Image
										className={`${imageClassName} ${
											closeCount !== 3 && closeCount !== 2
												? 'opacity-0'
												: 'opacity-100'
										}`}
										src='/typing-animation/sad.png'
										alt=''
										width={1472}
										height={992}
										onLoad={onImageLoad('sad')}
									/>
									<Image
										className={`${imageClassName} ${
											closeCount !== 4 ? 'opacity-0' : 'opacity-100'
										}`}
										src='/typing-animation/angry.png'
										alt=''
										width={1472}
										height={992}
										onLoad={onImageLoad('angry')}
									/>
								</>
							)}
						</>
					)}
				</div>
				{!closed && ['default', 'typing'].includes(type) && (
					<button
						onClick={onBoop}
						tabIndex={-1}
						className='absolute right-[26%] top-[40%] -translate-y-1/2 translate-x-1/2 h-24 w-24 opacity-0 bg-error'
					/>
				)}
				<div className='absolute top-[20%] md:top-1/3 left-32 md:left-128 right-1/2 flex justify-center md:-translate-y-1/2'>
					{!closed && (!!boop || !!closeCount) && (
						<div className='border-2 p-16 whitespace-pre-line bg-surface-50 rounded-[38%_34%_20%_3%_/_5%_3%_4%_32%] '>
							{!!boop && 'Boop!'}
							{closeCount === 1 && (
								<>
									You clicked it by accident,
									<br /> aren't you?
								</>
							)}
							{closeCount === 2 && (
								<>
									Why are you trying to get rid of me?
									<br /> You don't like me?
								</>
							)}
							{closeCount === 3 && 'Are you sure?'}
							{closeCount === 4 && 'Ok...'}
							{closeCount === -1 && 'Phew, false alarm...'}
						</div>
					)}
				</div>
			</div>
		</Window>
	)
}

export default CatiborWindow
