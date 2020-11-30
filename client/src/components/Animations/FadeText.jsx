import React, { useState } from 'react';
import { render } from 'react-dom';
import { useTrail, a } from 'react-spring';
import '../../assets/css/FadeText.css';

function Trail({ open, children, ...props }) {
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 5, tension: 2000, friction: 200 },
		opacity: open ? 1 : 0,
		x: open ? 0 : 20,
		height: open ? 110 : 0,
		from: { opacity: 0, x: 20, height: 0 },
	});
	return (
		<div className='trails-main' {...props}>
			<div>
				{trail.map(({ x, height, ...rest }, index) => (
					<a.div
						key={items[index]}
						className='trails-text'
						style={{
							...rest,
							transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
						}}
					>
						<a.div style={{ height }}>{items[index]}</a.div>
					</a.div>
				))}
			</div>
		</div>
	);
}

function FadeText() {
	const [open, set] = useState(true);
	return (
		<>
			<div className='fadeText'>
				<div className='fadeText__container'>
					<Trail open={open} onClick={() => set((state) => !state)}>
						<span>What Drives Us?</span>
					</Trail>
					<h1>Glad you asked!</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus et
						recusandae ea fugit delectus accusantium alias accusamus nemo quae.
						Placeat corrupti facere quidem reprehenderit tenetur aperiam totam,
						sunt sequi iste! Velit aspernatur voluptatem.
					</p>
				</div>
			</div>
		</>
	);
}

export default FadeText;
