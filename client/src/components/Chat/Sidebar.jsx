import React from 'react';
import '../../assets/css/Chat/Sidebar.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SidebarChat from './SidebarChat';

function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebar_header'>
				<Avatar src='https://honors.temple.edu/sites/honors/files/styles/medium/public/profiles/6h1a8291_49425095198_o.jpg?itok=WEvJ9bFS' />
				<div className='sidebar_headerRight'>
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>

			<div className='sidebar_search'>
				<div className='sidebar_searchContainer'>
					<SearchOutlinedIcon />
					<input type='text' placeholder='Search or start new chat' />
				</div>
			</div>

			<div className='sidebar_chats'>
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
			</div>
		</div>
	);
}

export default Sidebar;
