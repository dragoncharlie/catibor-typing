import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import Window from '@/components/Window'

type HelpWindowProps = {
	onFocus: () => void
	onClose: () => void
	layer: string
	focused: boolean
}

const HelpWindow = ({ onFocus, onClose, layer, focused }: HelpWindowProps) => {
	const [missing, setMissing] = useState(false)

	useEffect(() => {
		setMissing(!!localStorage.getItem('...'))
	}, [])

	return (
		<Window
			className={`absolute left-128 xl:left-[15%] bottom-16 max-w-[520px] h-1/2 w-2/3 lg:w-1/2 ${layer}`}
			title='help.txt'
			focused={focused}
			onClose={onClose}
			onFocus={onFocus}
		>
			<div className='p-16 min-w-[120px] overflow-auto'>
				<p className='mb-8'>What is it?</p>
				<p className='mb-20 text-surface-800 text-14'>
					It is just a mini-game to help you practice your typing skills: speed
					and accuracy.
					<br />
					<br />
					You can chose between two languages: English and Kittens. For English,
					there are several prepared texts, but for Kittens they are made with a
					simple generator.
				</p>
				<p className='mb-8'>Who is Catibor?</p>
				<p className='mb-20 text-surface-800 text-14'>
					Catibor is a CEO of a small outsource IT-company. He has a lot of
					tasks and one of them is writing emails to the company's clients for
					various reasons. So he would like to get your help&nbsp;;)
					<br />
					<br />
					By the way, there are two sticker packs for telegram with Catibor:{' '}
					<Link
						className='text-surface-900 underline'
						href='https://t.me/addstickers/Catibor'
						target='_blank'
					>
						static
					</Link>{' '}
					and{' '}
					<Link
						className='text-surface-900 underline'
						href='https://t.me/addstickers/CatiborVideo'
						target='_blank'
					>
						animated
					</Link>
					!!!
				</p>
				{missing && (
					<>
						<p className='mb-8'>Catibor is missing ;(</p>
						<p className='mb-20 text-surface-800 text-14'>
							Sorry, right now we also don't know how to ask him to come back.
							But we are working on it.
						</p>
					</>
				)}
				<p className='mb-8'>I found a bug!</p>
				<p className='mb-20 text-surface-800 text-14'>
					If you found any kind of bug you can report it to{' '}
					<Link
						className='text-surface-900 underline'
						href='https://github.com/dragoncharlie/catibor-typing/issues'
						target='_blank'
					>
						github issues section
					</Link>{' '}
					and we will try to fix it a soon as possible.
				</p>
				<p className='mb-8'>I want to help!</p>
				<p className='mb-20 text-surface-800 text-14'>
					If you have any suggestion, read a previous question. If you want to
					help directly, there is{' '}
					<Link
						className='text-surface-900 underline'
						href='https://github.com/dragoncharlie/catibor-typing'
						target='_blank'
					>
						the source code
					</Link>
					&nbsp;;)
				</p>

				<p className='text-12'>Catibor © 2021 - {new Date().getFullYear()}</p>
			</div>
		</Window>
	)
}

export default HelpWindow
