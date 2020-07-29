import React, { useState, useEffect } from 'react'
import './App.css'
import User from './components/User'
import PostList from './components/PostList'
import Error from './components/Error'

const BASE_URL = 'https://jsonplaceholder.typicode.com/'

function App() {
	const [error, setError] = useState()
	const [userList, setUserList] = useState()
	const [posts, setPosts] = useState()
	const [selectedUserId, setSelectedUser] = useState()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(BASE_URL + 'users')
				const jsonResponse = await response.json()
				setUserList(jsonResponse.slice(0, 5))
			} catch (e) {
				console.log('e', e)
				setError(e)
			}
		}
		fetchData()
	}, [])

	const getPosts = async (userId) => {
		try {
			const response = await fetch(BASE_URL + 'posts?userId=' + userId)
			const jsonResponse = await response.json()
			setPosts(jsonResponse)
			setSelectedUser(userId)
		} catch (e) {
			console.log(e)
			setError(e)
		}
	}

	return (
		<div className="app">
			<div className="header">
				<h1>Usuarios y Posts</h1>
			</div>
			{error ? (
				<Error error={error} />
			) : (
				<>
					<div className="user_list">
						{userList &&
							userList.map((user) => {
								const selected = user.id === selectedUserId
								return (
									<User
										key={user.id}
										user={user}
										getPosts={getPosts}
										selected={selected}
									/>
								)
							})}
					</div>
					{posts ? (
						<PostList posts={posts} />
					) : (
						<div className="noUserSelected">
							<h3>Seleccione un usuario para ver sus post</h3>
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default App
