import React from 'react';
import '../assets/css/Offer.css';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Offer() {
	return (
		<div className='offer'>
			<div className='offer__title'>
				<h1>Campus Life</h1>
				<h3>
					A thriving community of creative and accomplished people from around
					the world
				</h3>
			</div>
			<div className='offer__description'>
				<div className='set'>
					<img
						src='https://www-media.stanford.edu/wp-content/uploads/2020/09/14162724/Campus-life-1.jpg'
						alt=''
					/>
					<h2>Student Life</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
						eaque.
					</p>
				</div>
				<div className='set'>
					<img
						src='https://www-media.stanford.edu/wp-content/uploads/2020/09/14163112/Arts-culture.jpg'
						alt=''
					/>
					<h2>Student Life</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
						eaque.
					</p>
				</div>
				<div className='set'>
					<img
						src='https://www-media.stanford.edu/wp-content/uploads/2017/06/23175630/swimming-8x5.jpg'
						alt=''
					/>
					<h2>Student Life</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
						eaque.
					</p>
				</div>
			</div>
			<div className='offer__button'>
				<Button
					style={{ height: '45px', width: '140px' }}
					variant='contained'
					color='primary'
				>
					Learn More
				</Button>
			</div>
		</div>
	);
}

export default Offer;

// <div className='offer'>
// 	<div className='offerDescription'>
// 		<div className='content'>
// 			<h1>What we offer</h1>
// 			<h1>For Students</h1>
// 			<p>
// 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
// 				tempora fuga suscipit maiores ratione sed molestias quas excepturi,
// 				animi sunt. Sequi amet nostrum perferendis pariatur temporibus
// 				voluptatum ratione eligendi voluptates?
// 			</p>
// 			<p>
// 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
// 				sint, iste esse expedita sequi aspernatur.
// 			</p>
// 			<Link to='/'>Learn More</Link>
// 		</div>
// 		<div className='image'>
// 			<img
// 				src='https://i-lab.harvard.edu/innolabs/wp-content/uploads/sites/5/2020/04/start-it-orientation-1024x1024.jpg'
// 				alt=''
// 			/>
// 		</div>
// 	</div>
// 	<div className='offerDescription'>
// 		<div className='image2'>
// 			<img
// 				src='https://i-lab.harvard.edu/innolabs/wp-content/uploads/sites/5/2018/08/alumni-stock-photo-1024x957.jpg'
// 				alt=''
// 			/>
// 		</div>
// 		<div className='content'>
// 			<h1>For Alumni</h1>
// 			<p>
// 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
// 				tempora fuga suscipit maiores ratione sed molestias quas excepturi,
// 				animi sunt. Sequi amet nostrum perferendis pariatur temporibus
// 				voluptatum ratione eligendi voluptates?
// 			</p>
// 			<p>
// 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
// 				sint, iste esse expedita sequi aspernatur. Lorem ipsum dolor, sit
// 				amet consectetur adipisicing elit. Esse aspernatur vitae ea, labore
// 				ducimus nisi sequi quos eveniet blanditiis quidem.
// 			</p>
// 			<Link to='/'>Learn More</Link>
// 		</div>
// 	</div>
// </div>
