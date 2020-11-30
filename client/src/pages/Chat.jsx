import React, { useState, useEffect } from 'react';
import Chats from '../components/Chat/Chats';
import Sidebar from '../components/Chat/Sidebar';
import '../assets/css/Chat/ChatBody.css';
import axios from '../helper/axios';

const access_token = JSON.parse(localStorage.user).token;
console.log(access_token);
function Chat() {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		let isRendered = true;

		async function fetchMessages() {
			const response = await axios.get('/messages', {
				headers: {
					'auth-token': `${access_token}`,
				},
			});
			setMessages(response.data);
			return () => (isRendered = false);
		}

		fetchMessages();
	}, [messages]);

	return (
		<div className='chat'>
			<div className='chat__body'>
				<Sidebar />
				<Chats messages={messages} />
			</div>
		</div>
	);
}

export default Chat;
