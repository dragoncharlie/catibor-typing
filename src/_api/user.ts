import User from '@/_types/User'

export async function getUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	return (await res.json()) as User[]
}
