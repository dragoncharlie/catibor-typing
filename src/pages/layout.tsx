import { Link, Outlet } from 'react-router-dom'
import useTheme from '@/_themes/useTheme.tsx'

function Layout() {
	useTheme()

	return (
		<div>
			<div className='flex items-center gap-2 mb-8'>
				<Link className='hover:text-primary-500' to='/'>
					Home page
				</Link>
				<Link className='hover:text-primary-500' to='/users'>
					Users page
				</Link>
			</div>
			<Outlet />
		</div>
	)
}

export default Layout
