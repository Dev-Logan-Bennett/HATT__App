import React from 'react';
import '../assets/css/Perks.css';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

function Perks() {
	return (
		<div className='loginLanding__perks'>
			<h1>Perks of signing up</h1>
			<div className='loginLanding__perksIcons'>
				<div className='twoIcons'>
					<div className='content'>
						<AddAlertIcon />
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
							nisi magnam aliquam doloribus nostrum itaque omnis iste deleniti
							perferendis. Officiis, expedita eveniet. Perspiciatis aperiam
							placeat tempora molestiae dolor consectetur ipsam?
						</p>
					</div>
					<div className='content'>
						<QueryBuilderIcon />
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
							nisi magnam aliquam doloribus nostrum itaque omnis iste deleniti
							perferendis. Officiis, expedita eveniet. Perspiciatis aperiam
							placeat tempora molestiae dolor consectetur ipsam?
						</p>
					</div>
				</div>
				<div className='twoIcons'>
					<div className='content'>
						<AssessmentIcon />
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
							nisi magnam aliquam doloribus nostrum itaque omnis iste deleniti
							perferendis. Officiis, expedita eveniet. Perspiciatis aperiam
							placeat tempora molestiae dolor consectetur ipsam?
						</p>
					</div>
					<div className='content'>
						<AttachMoneyIcon />
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
							nisi magnam aliquam doloribus nostrum itaque omnis iste deleniti
							perferendis. Officiis, expedita eveniet. Perspiciatis aperiam
							placeat tempora molestiae dolor consectetur ipsam?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Perks;
