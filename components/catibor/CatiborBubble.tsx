import React, { useEffect, useState } from 'react'

type CatiborBubbleProps = {
	isCapsOn: boolean
	isBoop: boolean
	closeCount: number
}

const CatiborBubble = ({
	isBoop,
	isCapsOn,
	closeCount,
}: CatiborBubbleProps) => {
	const [text, setText] = useState('')
	const [boop, setBoop] = useState<NodeJS.Timeout | null>(null)
	const [caps, setCaps] = useState<NodeJS.Timeout | null>(null)

	const onBoop = () => {
		const id = setTimeout(() => {
			setBoop(null)
			setText('')
		}, 1000)
		setBoop(id)
		setText('Boop!')
	}

	useEffect(() => {
		if (isCapsOn && !closeCount) {
			const id = setTimeout(() => {
				setCaps(null)
				setText('')
			}, 1000)
			setCaps(id)
			setText('Caps Lock is on!')
		}
	}, [isCapsOn, closeCount])

	useEffect(() => {
		if (boop) clearTimeout(boop)
		if (caps) clearTimeout(caps)
		switch (closeCount) {
			case -1:
				setText('Phew, false alarm...')
				break
			case 1:
				// eslint-disable-next-line quotes
				setText(`You clicked it by accident,\n aren't you?`)
				break
			case 2:
				// eslint-disable-next-line quotes
				setText(`Why are you trying to get rid of me?\n You don't like me?`)
				break
			case 3:
				setText('Are you sure?')
				break
			case 4:
				setText('Ok...')
				break

			default:
				setText('')
				break
		}
	}, [closeCount])

	return (
		<>
			{isBoop && (
				<button
					onClick={onBoop}
					tabIndex={-1}
					className='absolute right-[26%] top-[40%] -translate-y-1/2 translate-x-1/2 h-24 w-24 opacity-0 bg-error'
				/>
			)}
			<div className='absolute top-[20%] md:top-1/3 left-32 md:left-128 right-1/2 flex justify-center md:-translate-y-1/2'>
				{text && (
					<div className='border-2 p-16 whitespace-pre-line bg-surface-50 rounded-[38%_34%_20%_3%_/_5%_3%_4%_32%] '>
						{text}
					</div>
				)}
			</div>
		</>
	)
}

export default CatiborBubble
