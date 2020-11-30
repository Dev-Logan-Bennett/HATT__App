import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import { registrationValidation } from '../../validation';
import { userRegistration, clearError } from '../../redux/registration';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../../assets/css/Register.css';

const initialValues = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
};

let setTimeOut = null;

const RegistrationForm = () => {
	const regState = useSelector(({ reg }) => reg);
	const dispatch = useDispatch();

	useEffect(() => {
		clearTimeout(setTimeOut);
		setTimeOut = setTimeout(() => {
			dispatch(clearError());
		}, 3000);
	}, [regState.error]);

	const formik = useFormik({
		initialValues,
		validationSchema: registrationValidation,
		onSubmit: (values) => dispatch(userRegistration(values)),
	});

	return regState.registered ? (
		<Redirect to='/login' />
	) : (
		<div className='register'>
			<form className='register__form' onSubmit={formik.handleSubmit}>
				<span>Registration</span>

				{regState.error ? (
					<div className='wrap-input100 validate-input error-message m-b-25'>
						{regState.error}
					</div>
				) : null}

				<div
					className={`wrap-input100 validate-input m-b-16 ${
						formik.touched.name && formik.errors.name ? 'alert-validate' : ''
					}`}
					data-validate={formik.errors.name}
				>
					<TextField
						type='text'
						name='name'
						placeholder='Name'
						autoComplete='off'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
					/>
					<span className='focus-input100' />
				</div>

				<div
					className={`wrap-input100 validate-input m-b-16 ${
						formik.touched.email && formik.errors.email ? 'alert-validate' : ''
					}`}
					data-validate={formik.errors.email}
				>
					<TextField
						type='email'
						name='email'
						placeholder='Email'
						autoComplete='off'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					<span className='focus-input100' />
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
						placeholder='Password'
						autoComplete='off'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
					/>
					<span />
				</div>

				<div
					className={`wrap-input100 validate-input m-b-25 ${
						formik.touched.confirmPassword && formik.errors.confirmPassword
							? 'alert-validate'
							: ''
					}`}
					data-validate={formik.errors.confirmPassword}
				>
					<TextField
						type='password'
						name='confirmPassword'
						placeholder='Confirm Password'
						autoComplete='off'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.confirmPassword}
					/>
					<span />
				</div>

				<div className='container-login100-form-btn'>
					<Button
						type='submit'
						variant='contained'
						color='secondary'
						disabled={regState.loader}
					>
						Sign up
						{regState.loader ? <div /> : null}
					</Button>
				</div>

				<div>
					<Link to='/login'>Back To Login</Link>
				</div>
			</form>
		</div>
	);
};

export default RegistrationForm;
