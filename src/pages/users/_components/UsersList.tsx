import { getUsers } from '@/_api/user.ts'
import { useQuery } from '@tanstack/react-query'

export default function ListUsers() {
	const { data, isLoading, isFetching, error } = useQuery({
		queryKey: ['users'],
		queryFn: getUsers,
	})

	return (
		<>
			{error ? (
				<p>Oh no, there was an error</p>
			) : isLoading || isFetching ? (
				<p>Loading...</p>
			) : data ? (
				<div className='flex flex-wrap gap-4'>
					{data.map((user) => (
						<div key={user.id}>
							<img
								src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
								alt={user.name}
								width={180}
								height={180}
							/>
							<h3>{user.name}</h3>
						</div>
					))}
				</div>
			) : null}
		</>
	)
}
