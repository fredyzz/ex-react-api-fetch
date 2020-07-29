import React from 'react'

const Post = ({ error }) => {
	return (
		<div className="error">
			<h3>Ocurrió un error</h3>
			<p>{error.message}</p>
		</div>
	)
}

export default Post
