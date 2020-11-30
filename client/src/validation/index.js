import * as Yup from 'yup';

export const loginValidation = Yup.object({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().min(6).required('Password is required'),
});

export const registrationValidation = Yup.object({
  name: Yup.string().min(2).required('Name is required'),
  email: Yup.string().email('Email should be valid').required('Email is required'),
  password: Yup.string().min(6).required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
});
