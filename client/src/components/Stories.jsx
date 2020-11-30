import React from 'react';
import { Parallax, Background } from 'react-parallax';

const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center',
};
const insideStyles = {
	background: 'whitesmoke',
	padding: 20,
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%,-50%)',
	fontSize: '38px',
};
const image1 =
	'http://nnimgt-a.akamaihd.net/transform/v1/crop/frm/rhV3xmHEy3uGWV84VpTnhE/35c1335f-713a-40bf-8927-58aa8b86bc44.jpg/r0_154_5760_3674_w1200_h678_fmax.jpg';
const image2 =
	'https://www.pearsoned.com/wp-content/uploads/Young-male-college-student-studying-in-library-with-many-books-and-a-notebook.jpg';
const image3 =
	'https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001';
const image4 =
	'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg';

const Stories = () => (
	<div style={styles}>
		<Parallax bgImage={image1} blur={{ min: -1, max: 3 }} strength={500}>
			<div style={{ height: 500 }}>
				<h1 style={insideStyles}>Join Us For Food Trucks!</h1>
			</div>
		</Parallax>
		<Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
			<div style={{ height: 500 }}>
				<div style={insideStyles}>
					<h1 style={insideStyles}>Adventures</h1>
				</div>
			</div>
		</Parallax>
		<Parallax bgImage={image2} strength={-100}>
			<div style={{ height: 500 }}>
				<div style={insideStyles}>High GPA</div>
			</div>
		</Parallax>
		<Parallax strength={500}>
			<Background className='custom-bg'>
				<div
					style={{
						height: 2000,
						width: 2000,
						backgroundImage: "url('https://i.imgur.com/8CV5WAB.png')",
					}}
				/>
			</Background>
		</Parallax>
	</div>
);

// import React from 'react';
// import '../assets/css/Stories.css';

// function Stories() {
// 	return (
// 		<div></div>
// 		// <div className='loginLanding__stories'>
// 		// 	<div className='loginLanding__storiesImages'>
// 		// 		<div className=''>
// 		// 			<img
// 		// 				style={{
// 		// 					height: '450px',
// 		// 					width: '450px',
// 		// 				}}
// 		// 				src='https://images.unsplash.com/photo-1605036928497-ef253d8221e3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8X2hiLWRsNFEtNFV8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60'
// 		// 				alt=''
// 		// 			/>
// 		// 			<div>Erin</div>
// 		// 		</div>
// 		// 		<div className='loginLanding__storiesImagesVertical'>
// 		// 			<div className=''>
// 		// 				<img
// 		// 					src='https://images.unsplash.com/photo-1604699144164-4d8ab982b154?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNXxfaGItZGw0US00VXx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
// 		// 					alt=''
// 		// 				/>
// 		// 				<div>Erin</div>
// 		// 			</div>
// 		// 			<div className=''>
// 		// 				<img
// 		// 					src='https://images.unsplash.com/photo-1605628015706-997317f2b31f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fF9oYi1kbDRRLTRVfHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
// 		// 					alt=''
// 		// 				/>
// 		// 				<div>Erin</div>
// 		// 			</div>
// 		// 		</div>
// 		// 	</div>
// 		// 	<div className='loginLanding__storyBottom'>
// 		// 		<h1>Our Stories</h1>
// 		// 	</div>
// 		// </div>
// 	);
// }

export default Stories;
