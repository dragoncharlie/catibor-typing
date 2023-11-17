import { createBrowserRouter } from 'react-router-dom'

import Root from '@/pages/layout.tsx'
import NotFound from '@/pages/not-found.tsx'

import Home from '@/pages/page.tsx'
import Users from '@/pages/users/page.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/users',
				element: <Users />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
])

export default router
