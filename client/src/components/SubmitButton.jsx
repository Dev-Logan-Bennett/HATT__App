import { Link } from '@material-ui/core';
import shadows from '@material-ui/core/styles/shadows';
import React, { useState, useEffect } from 'react';
import axios from '../helper/axios';
import Comments from './Comments';

const access_token = JSON.parse(localStorage.user).token;
console.log(access_token);
function SubmitButton({ id }) {
	const [comments, setComments] = useState([]);
	const [show, setShow] = useState(false);

	useEffect(async () => {
		const response = await axios.get(`/posts/${id}`, {
			headers: {
				'auth-token': `${access_token}`,
			},
			body: {
				_id: '5fbfee7f2df4057b14fbbefb',
			},
		});

		setComments(response.data.comments);
	}, []);

	const renderComponent = () => {
		setShow(!show);
		console.log(show);
	};

	return (
		<div>
			<button onClick={renderComponent}>Display Comments</button>
			{show ? <Comments comments={comments} /> : null}
		</div>
	);
}

export default SubmitButton;
