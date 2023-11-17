import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<main className='flex flex-col items-center justify-center relative overflow-hidden p-32'>
			<h1 className='text-secondary-600 font-bold text-[92px] md:text-[140px] leading-140 mb-8'>
				404
			</h1>
			<Link
				to='/'
				className='border px-2 py-4 min-w-[180px] text-center hover:text-primary-500 hover:border-primary-500'
			>
				Home
			</Link>
		</main>
	)
}

export default NotFound
