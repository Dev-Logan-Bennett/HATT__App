import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/authentication';
import '../assets/css/Navbar.css';

const Navbar = () => {
	const dispatch = useDispatch();
	const user = useSelector(({ auth }) => auth.user);

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<nav className='navbar'>
			<Link to='/' className='navbar__brand'>
				Hello, {user.name}
			</Link>
			<ul className='navbar__nav'>
				<li className='navbar__item'>
					<span
						className='navbar__logout'
						onClick={logoutHandler}
						tabIndex='0'
						role='button'
						onKeyDown={logoutHandler}
						className='nav-link'
					>
						Logout
					</span>
				</li>
				<Link to='/chat' className='navbar__item'>
					Chat
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
