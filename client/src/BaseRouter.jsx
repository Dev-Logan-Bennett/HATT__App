import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Navbar from './components/Navbar';

// component lazy load
const HomePage = lazy(() => import('./pages/Home'));
const LoginPage = lazy(() => import('./pages/Login'));
const RegistrationPage = lazy(() => import('./pages/Registration'));
const ChatPage = lazy(() => import('./pages/Chat'));

export default function BaseRouter() {
	const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);

	return (
		<Switch>
			{isAuthenticated ? (
				<>
					{/* <Redirect to='/' /> */}
					<Navbar />
					<Route exact path='/' component={HomePage} />
					<Route exact path='/chat' component={ChatPage} />
					<Redirect from='login' to='chat' />
				</>
			) : (
				<>
					<Header />
					<Route path='/login' component={LoginPage} />
					<Route path='/registration' component={RegistrationPage} />
					<Redirect from='/' to='/login' />
				</>
			)}
		</Switch>
	);
}
