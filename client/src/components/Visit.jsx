import React from 'react';
import '../assets/css/LoginLanding.css';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';

function Visit() {
	return (
		<div className='loginLanding__visit'>
			<div className='loginLanding__visitUs'>
				<img src='https://www.logolynx.com/images/logolynx/e2/e26147842685745bb33ed28501dc1db1.png' />
				<div>
					<h1>Visit us virtually</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Repellendus, nihil pariatur? Sapiente excepturi, sequi placeat ipsum
						voluptatibus deserunt delectus praesentium! Lorem ipsum dolor, sit
						amet consectetur adipisicing elit. Magni cupiditate temporibus iusto
						doloribus qui quisquam consequuntur fugit, error at fugiat mollitia.
						Vero, corporis ad labore laudantium blanditiis ullam quos incidunt
						dolore esse suscipit soluta? Quae dolore, laudantium, repellat
						dolores sapiente, magni temporibus praesentium vitae saepe culpa vel
						et voluptatum natus?
					</p>
				</div>
			</div>
			<div className='loginLanding__visitApply'>
				<h1>Apply</h1>
				<hr />
				<div className='listings'>
					<div className='undergraduate'>
						<SchoolOutlinedIcon />
						<h2>Undergraduate</h2>
					</div>
					<div className='undergraduate'>
						<SchoolOutlinedIcon />
						<h2>Undergraduate</h2>
					</div>
					<div className='undergraduate'>
						<SchoolOutlinedIcon />
						<h2>Undergraduate</h2>
					</div>
					<div className='undergraduate bottom'>
						<SchoolOutlinedIcon />
						<h2>Undergraduate</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Visit;
