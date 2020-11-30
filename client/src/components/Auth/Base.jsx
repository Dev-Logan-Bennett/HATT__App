import React from 'react';
import PropTypes from 'prop-types';

const Base = ({ children }) => (
	<div>
		<div>
			<div>{children}</div>
		</div>
	</div>
);

Base.propTypes = {
	children: PropTypes.element.isRequired,
};

export default Base;
