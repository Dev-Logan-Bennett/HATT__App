import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginValidation } from '../../validation';
import { userLogin, clearError } from '../../redux/authentication';
import { clearAll } from '../../redux/registration';
import '../../assets/css/LoginForm.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const initialValues = {
	email: '',
	password: '',
};

let setTimeOut;

const LoginForm = () => {
	const regState = useSelector(({ reg }) => reg);
	const authState = useSelector(({ auth }) => auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (regState.registered) {
			setTimeout(() => {
				dispatch(clearAll());
			}, 3000);
		}
	}, []);

	useEffect(() => {
		clearTimeout(setTimeOut);
		setTimeOut = setTimeout(() => {
			dispatch(clearError());
		}, 3000);
	}, [authState.error]);

	const formik = useFormik({
		initialValues,
		validationSchema: loginValidation,
		onSubmit: (values) => dispatch(userLogin(values)),
	});

	return (
		<>
			<div className='loginForm'>
				<form className='loginForm__form' onSubmit={formik.handleSubmit}>
					<span>Sign in</span>

					{authState.error ? <div>{authState.error}</div> : null}

					{regState.registered ? (
						<div>You are successfully registered</div>
					) : null}

					<div data-validate={formik.errors.email}>
						<TextField
							type='email'
							name='email'
							placeholder='Email'
							autoComplete='off'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
						/>
						<span />
					</div>

					<div
						className={`wrap-input100 validate-input m-b-16 ${
							formik.touched.password && formik.errors.password
								? 'alert-validate'
								: ''
						}`}
						data-validate={formik.errors.password}
					>
						<TextField
							type='password'
							name='password'
							placeholder='password'
							autoComplete='off'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
						/>
						<span />
					</div>

					<div>
						<Button
							type='submit'
							disabled={authState.loader}
							variant='contained'
							color='primary'
						>
							Sign in
							{authState.loader ? <div /> : null}
						</Button>
					</div>

					<div>
						<span>Don’t have an account? </span>

						<Link to='/registration'>Sign up now</Link>
					</div>
				</form>
				<div className='logo'>
					<img
						src='https://studyabroad.temple.edu/sites/studyabroad/files/uploads/TU_Primary_Red_Black.png'
						alt=''
					/>
				</div>
			</div>
		</>
	);
};

export default LoginForm;
