import React from 'react';
import Base from '../components/Auth/Base';
import LoginForm from '../components/Auth/LoginForm';
import LoginLanding from '../components/LoginLanding';
import LoginLandingBanner from '../components/LoginLandingBanner';

const Login = () => (
	<Base>
		<LoginLanding />
		<LoginForm />
		<LoginLandingBanner />
	</Base>
);

export default Login;
