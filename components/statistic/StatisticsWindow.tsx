import { useEffect, useState } from 'react'

import Window from '@/components/Window'
import Tooltip from '@/components/Tooltip'

type Stat = {
	wpm: number
	cpm: number
	accuracy: number
	date: string
}

type StatisticsWindowProps = {
	onFocus: () => void
	onClose: () => void
	layer: string
	focused: boolean
	updateFlag: string
}

const cellClassName =
	'p-4 px-8 border border-collapse first:border-l-0 last:border-r-0'

const StatisticsWindow = ({
	onFocus,
	onClose,
	layer,
	updateFlag,
	focused,
}: StatisticsWindowProps) => {
	const [stats, setStats] = useState<{ eng: Stat[]; meow: Stat[] }>({
		eng: [],
		meow: [],
	})
	const [tab, setTab] = useState<'eng' | 'meow'>('eng')

	useEffect(() => {
		const engStats = localStorage.getItem('eng')
		const meowStats = localStorage.getItem('meow')
		setStats({
			eng: engStats ? JSON.parse(engStats) : [],
			meow: meowStats ? JSON.parse(meowStats) : [],
		})
	}, [updateFlag])

	return (
		<Window
			title='stats.xlsx'
			focused={focused}
			onClose={onClose}
			onFocus={onFocus}
			className={`absolute left-1/3 xl:left-[40%] top-16 w-full max-w-[520px] ${layer}`}
		>
			<div className='overflow-auto'>
				<>
					<table className='text-end w-full'>
						<thead>
							<tr>
								<th className={`${cellClassName} bg-surface-200 border-t-0`}>
									#
								</th>
								<th className={`${cellClassName} border-t-0`} colSpan={4}>
									<p className='text-center text-18'>Your best 10 results</p>
								</th>
							</tr>
							<tr className='text-14 text-surface-800'>
								<th
									className={`${cellClassName} bg-surface-200 text-surface-900 text-16 w-32`}
								>
									0.
								</th>
								<th className={`${cellClassName} w-72`}>
									<span className='flex gap-4 justify-end relative pr-8'>
										<Tooltip text='Words&nbsp;per&nbsp;minute (5&nbsp;characters&nbsp;per&nbsp;word)'>
											WPM
											<span className='text-12 absolute -top-4 -right-8'>
												?
											</span>
										</Tooltip>
									</span>
								</th>
								<th className={`${cellClassName} w-72`}>
									<span className='flex gap-4 justify-end relative pr-8'>
										<Tooltip text='Characters&nbsp;(symbols) per&nbsp;minute'>
											CPM
											<span className='text-12 absolute -top-4 -right-8'>
												?
											</span>
										</Tooltip>
									</span>
								</th>
								<th className={`${cellClassName} w-100`}>Accuracy</th>
								<th className={`${cellClassName} text-start`}>Date</th>
							</tr>
						</thead>
						<tbody>
							{stats[tab].length ? (
								<>
									{stats[tab].map((record, index) => (
										<tr key={record.date}>
											<td className={`${cellClassName} bg-surface-200`}>
												{index + 1}.
											</td>
											<td className={cellClassName}>{record.wpm}</td>
											<td className={cellClassName}>{record.cpm}</td>
											<td className={cellClassName}>{record.accuracy}%</td>
											<td className={`${cellClassName} text-start`}>
												{new Date(record.date).toLocaleString()}
											</td>
										</tr>
									))}
									<tr>
										<td
											className={`${cellClassName} bg-surface-200 border-b-0`}
										>
											N.
										</td>
										<td className={`${cellClassName} border-b-0`} colSpan={4}>
											<p className='text-center text-18'>
												You're doing great! Keep practicing ;)
											</p>
										</td>
									</tr>
								</>
							) : (
								<tr>
									<td className={`${cellClassName} bg-surface-200 border-b-0`}>
										N.
									</td>
									<td className={`${cellClassName} border-b-0`} colSpan={4}>
										<p className='text-center text-18'>
											No recorded data yet. <br /> Let's go and write few
											emails?
										</p>
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</>
			</div>
			<div className='border-t-2'>
				<button
					onClick={() => setTab('eng')}
					className={`px-8 border-r-2 hover:text-primary border-surface-900 ${
						tab === 'eng' ? '' : 'text-surface-700'
					}`}
				>
					English
				</button>
				<button
					onClick={() => setTab('meow')}
					className={`px-8 border-r-2 hover:text-primary border-surface-900 ${
						tab === 'meow' ? '' : 'text-surface-700'
					}`}
				>
					Kittens
				</button>
			</div>
		</Window>
	)
}

export default StatisticsWindow
