import React, { useState } from 'react';
import '../assets/css/LoginLanding.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Spring } from 'react-spring/renderprops';
import FadeText from './Animations/FadeText';
import Slider from './Animations/Slider';
import Dates from './Dates';
import Stories from './Stories';
import Visit from './Visit';
import Offer from './Offer';
import Perks from './Perks';
import Quote from './Quote';

function LoginLanding() {
	return (
		<div className='loginLanding'>
			<Slider />
			<Spring
				from={{ opacity: 0 }}
				to={{ opacity: 1 }}
				config={{ delay: 500, duration: 1000 }}
			>
				{(props) => (
					<div style={props} className='loginLanding_welcome'>
						<h1>Welcome to HATT</h1>
						<div className='loginLanding__icons'>
							<TwitterIcon />
							<InstagramIcon />
							<LinkedInIcon />
							<FacebookIcon />
						</div>
					</div>
				)}
			</Spring>
			<FadeText />
			<Spring
				from={{ number: 0 }}
				to={{ number: 55 }}
				config={{ duration: 8000 }}
			>
				{(props) => (
					<div style={props}>
						<div style={counter}>
							<h1 style={counterH1}>
								{props.number.toFixed()} members, become one!
							</h1>
						</div>
					</div>
				)}
			</Spring>
			{/* <div className='loginLanding__description'>
				<h1>What We Do!</h1>
				<h4>We Rise Lifting Others</h4>
				<img
					src='https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGdyb3VwJTIwb2YlMjBoYW5kc3xlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60)'
					alt=''
				/>
			</div> */}
			<Visit />
			{/* <img
				src='https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTcxfHxncm91cCUyMG9mJTIwaGFuZHN8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60'
				alt=''
			/>
			<img
				src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTZ8fGdyb3VwJTIwb2YlMjBoYW5kc3xlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60'
				alt=''
			/>
			<img
				src='https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGZyaWVuZHMlMjB3aXRoJTIwbWFza3N8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60'
				alt=''
			/> */}
			<Offer />
			<Stories />
			<Quote />
			<Perks />
			<Dates />
		</div>
	);
}

const counter = {
	background: '#123',
	textAlign: 'center',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '300px',
	height: '200px',
	borderRadius: '50%',
	margin: '1rem auto',
};

const counterH1 = {
	fontSize: '30px',
	fontWeight: '400',
	margin: '2rem',
	color: 'white',
};

export default LoginLanding;
