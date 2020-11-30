import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import '../../assets/css/Chat/Chat.css';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from '../../helper/axios';

const access_token = JSON.parse(localStorage.user).token;

function Chats({ messages }) {
	const [input, setInput] = useState([]);

	const sendMessage = async (e) => {
		e.preventDefault();
		const response = await axios.post('/messages', {
			headers: {
				'auth-token': `${access_token}`,
			},
			body: input,
		});
		console.log(response);
		setInput('');
	};

	return (
		<div className='chat'>
			<div className='chat_header'>
				<Avatar />

				<div className='chat_headerInfo'>
					<h3>Room name</h3>
					<p>Last seen at ...</p>
				</div>

				<div className='chat_headerRight'>
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>

			<div className='chat_body'>
				{messages.map((message, id) => (
					<p
						key={id}
						className={`chat_message ${message.received && 'chat_receiver'}`}
					>
						<span className='chat_name'>{message._id}</span>

						{message.body}

						<span className='chat_timestamp'>{message.timestamp}</span>
					</p>
				))}
			</div>

			<div className='chat_footer'>
				<InsertEmoticonIcon />

				<form action=''>
					<input
						type='text'
						value={input}
						placeholder='Type a message'
						onChange={(e) => setInput(e.target.value)}
					/>
					<button onClick={sendMessage} type='submit'>
						Send a message
					</button>
					<button>Send a Message</button>
				</form>
				<MicIcon />
			</div>
		</div>
	);
}

export default Chats;
