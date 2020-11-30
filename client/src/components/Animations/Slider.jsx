import { render } from 'react-dom';
import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import '../../assets/css/slides.css';

const slides = [
	{
		id: 0,
		url:
			'photo-1545672968-3ef43aceabe3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTF8fHBoaWxhZGVscGhpYXxlbnwwfDB8MHw%3D&auto=format',
	},
	{
		id: 1,
		url:
			'photo-1528675025161-ea13b463cc02?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHBoaWxhZGVscGhpYXxlbnwwfDB8MHw%3D',
	},
	{
		id: 2,
		url:
			'photo-1569436807631-5768b1ddac9b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODJ8fGdyYWZmaXRpJTIwYmFja2dyb3VuZHxlbnwwfDB8MHw%3D&w=500&q=60',
	},
	{
		id: 3,
		url:
			'photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8&auto=format&q=60',
	},
];

function Slider() {
	const [index, set] = useState(0);
	const transitions = useTransition(slides[index], (item) => item.id, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		// config: config.molasses,
	});
	useEffect(
		() => void setInterval(() => set((state) => (state + 1) % 4), 2000),
		[]
	);
	return transitions.map(({ item, props, key }) => (
		<div className='bg__container'>
			<animated.div
				key={key}
				className='bg'
				style={{
					...props,
					backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`,
				}}
			/>
		</div>
	));
}

export default Slider;
