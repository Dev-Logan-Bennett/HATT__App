import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import '../../assets/css/Chat/SidebarChat.css';

function SidebarChat() {
	return (
		<div className='sidebarChat'>
			<Avatar />
			<div className='sidebarChat_info'>
				<h2>Room name</h2>
				<p>This is the last message</p>
			</div>
		</div>
	);
}

export default SidebarChat;
