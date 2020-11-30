import React from 'react';
import '../assets/css/Header.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className='header'>
			<div className='header__tags'>
				<div className='header__logo'>
					<Link to='/'>
						<img
							src='https://i-lab.harvard.edu/innolabs/wp-content/uploads/sites/5/2017/04/cropped-main-logo-red.png'
							alt='HATT Logo'
						/>
					</Link>
				</div>
				<div className='header__tagline'>
					<Link to='/'>
						<h3>
							Temple <br /> HATT
						</h3>
					</Link>
				</div>
			</div>
			<div className='header__links'>
				<Link to='/registration'>Register</Link>
				<Link to='/login'>Login</Link>
			</div>
		</div>
	);
}

export default Header;
