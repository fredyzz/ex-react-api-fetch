import React from 'react'

const User = ({ user, getPosts, selected }) => {
	const handleClick = () => {
		getPosts(user.id)
	}

	return (
		<div>
			<button
				className={selected ? 'user_button selected' : 'user_button'}
				onClick={handleClick}
			>
				{user.name}
			</button>
		</div>
	)
}

export default User
