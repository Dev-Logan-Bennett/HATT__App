import React, { useState, useEffect, useRef } from 'react';
import axios from '../helper/axios';
import TextField from '@material-ui/core/TextField';
import '../assets/css/Posts.css';
import SubmitButton from './SubmitButton';

const access_token = JSON.parse(localStorage.user).token;

function Landing() {
	const [posts, setPosts] = useState([]);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	useEffect(() => {
		let isRendered = true;

		async function fetchPosts() {
			const response = await axios.get('/posts', {
				headers: {
					'auth-token': `${access_token}`,
				},
			});
			setPosts(response.data);
			return () => (isRendered = false);
		}

		fetchPosts();
	}, [posts]);

	const handleBodyChange = (e) => {
		setBody(e.target.value);
	};

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleComment = (e) => {
		setComment(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			title: title,
			body: body,
		};
		axios
			.post('/posts', data, {
				headers: {
					'auth-token': `${access_token}`,
				},
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='posts'>
			{posts.map((post, id) => (
				<div key={id} className='posts__post'>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
					<TextField label='Comment' type='Comment' />
					<SubmitButton id={post._id} />
				</div>
			))}
			<div className='posts__submit'>
				<TextField
					label='Title'
					type='Title'
					value={title}
					onChange={handleTitleChange}
				/>
				<br />
				<TextField
					label='Body'
					type='Body'
					value={body}
					onChange={handleBodyChange}
				/>
				<br />
				<br />
				<button type='submit' onClick={handleSubmit}>
					Submit Post
				</button>
			</div>
		</div>
	);
}

export default Landing;
