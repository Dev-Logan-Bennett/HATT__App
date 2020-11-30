import React from 'react';
import '../assets/css/Quote.css';
function Quote() {
	return (
		<div className='quote'>
			<div className='quote__research'>
				<h1>Research</h1>
				<p>
					A culture of collaboration that drives innovative discoveries vital to
					our world, our health and our intellectual life
				</p>
			</div>
			<hr />
			<div className='quote__numbers'>
				<div className='set'>
					<h1>18 Institutes</h1>
					<p>cross interdisciplinary boundaries</p>
				</div>
				<div className='set'>
					<h1>18 Institutes</h1>
					<p>cross interdisciplinary boundaries</p>
				</div>
				<div className='set'>
					<h1>18 Institutes</h1>
					<p>cross interdisciplinary boundaries</p>
				</div>
			</div>
			<hr />
		</div>
	);
}

export default Quote;
