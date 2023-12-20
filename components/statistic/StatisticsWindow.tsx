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

const cellClassName = 'p-4 px-8'

const StatisticsWindow = ({
	onFocus,
	onClose,
	layer,
	updateFlag,
	focused,
}: StatisticsWindowProps) => {
	const [stats, setStats] = useState<Stat[]>([])

	useEffect(() => {
		const lsStats = localStorage.getItem('stats')
		if (lsStats) {
			setStats(JSON.parse(lsStats))
		}
	}, [updateFlag])

	return (
		<Window
			title='stats.xlsx'
			focused={focused}
			onClose={onClose}
			onFocus={onFocus}
			className={`absolute left-1/3 top-16 max-w-[520px] ${layer}`}
		>
			<div className='p-16 overflow-auto'>
				{stats.length ? (
					<>
						<p className='text-center mb-12 text-18'>Best 10 results</p>
						<table className='text-end'>
							<thead>
								<tr className='text-14 text-surface-800'>
									<th className={cellClassName} />
									<th className={cellClassName}>
										<span className='flex gap-4 justify-end'>
											WPM
											<Tooltip text='Words&nbsp;per&nbsp;minute (5&nbsp;characters&nbsp;per&nbsp;word)'>
												?
											</Tooltip>
										</span>
									</th>
									<th className={cellClassName}>
										<span className='flex gap-4 justify-end'>
											CPM
											<Tooltip text='Characters&nbsp;(symbols) per&nbsp;minute'>
												?
											</Tooltip>
										</span>
									</th>
									<th className={cellClassName}>Accuracy</th>
									<th className={`${cellClassName} text-start`}>Date</th>
								</tr>
							</thead>
							<tbody>
								{stats.map((record, index) => (
									<tr key={record.date}>
										<td className={cellClassName}>{index + 1}.</td>
										<td className={cellClassName}>{record.wpm}</td>
										<td className={cellClassName}>{record.cpm}</td>
										<td className={cellClassName}>{record.accuracy}%</td>
										<td className={`${cellClassName} text-start`}>
											{new Date(record.date).toLocaleString()}
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<p className='text-center mt-24 text-18'>
							You're doing great! Keep practice ;)
						</p>
					</>
				) : (
					<>
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						<p className='text-center my-24 mx-32'>
							No recorded data yet.
							<br /> Let's go and write few emails?
						</p>
					</>
				)}
			</div>
		</Window>
	)
}

export default StatisticsWindow
