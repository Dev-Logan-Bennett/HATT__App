import React from 'react';
import '../assets/css/Comments.css';

function Comments({ comments }) {
	return (
		<div>
			{comments.map((comment, id) => (
				<div key={id} className='comment'>
					<p>{comment.text}</p>
				</div>
			))}
		</div>
	);
}

export default Comments;
