import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/_i18n/i18n.ts'
import './index.css'

import router from './router.tsx'

import { RouterProvider } from 'react-router-dom'
import ThemeProvider from '@/_themes/ThemeProvider.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ThemeProvider>
	</React.StrictMode>,
)
