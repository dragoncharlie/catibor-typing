import React from 'react'
import Draggable from 'react-draggable'

type WindowProps = {
	title: React.ReactNode
	onClose: () => void
	className?: string
	onFocus: () => void
	children: React.ReactNode
	focused: boolean
}

const Window = ({
	children,
	title,
	onClose,
	onFocus,
	className = '',
	focused,
}: WindowProps) => {
	return (
		<Draggable handle='.handle' bounds='.desktop'>
			<div
				className={`border-2 overflow-hidden bg-surface-50 ${className} ${
					focused ? 'border-surface-900' : 'border-surface-600'
				}`}
			>
				<button
					onClick={onClose}
					className={`button absolute top-[3px] right-16 w-24 h-24 min-w-0 p-0 text-16 z-10 ${
						focused
							? 'border-surface-900 text-surface-900'
							: 'border-surface-600 text-surface-600'
					}`}
					type='button'
				>
					X
				</button>
				<div onClick={onFocus} className='flex flex-col h-full'>
					<div
						className={`handle relative border-b-2 w-full top-0 left-0 text-12 px-16 py-4 h-32 flex items-center shrink-0 ${
							focused
								? 'border-surface-900 text-surface-900'
								: 'border-surface-600 text-surface-600'
						}`}
					>
						<p>{title}</p>
					</div>
					{children}
				</div>
			</div>
		</Draggable>
	)
}

export default Window
