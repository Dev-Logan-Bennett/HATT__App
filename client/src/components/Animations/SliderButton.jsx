import { render } from 'react-dom';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import useMeasure from './useMeasure';
import '../../assets/css/SliderButton.css';

function SliderButton() {
	const [open, toggle] = useState(false);
	const [bind, { width }] = useMeasure();
	const props = useSpring({ width: open ? width : 0 });

	return (
		<div {...bind} className='sliderButton' onClick={() => toggle(!open)}>
			<animated.div className='fill' style={props} />
			<animated.div className='sliderButton__content'>
				{props.width.interpolate((x) => x.toFixed(0))}
			</animated.div>
		</div>
	);
}

export default SliderButton;
