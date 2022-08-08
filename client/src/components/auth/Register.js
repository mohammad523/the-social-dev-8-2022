/** @format */

import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = formData;

	const onChange = (e) => {
		// console.log("event.target.name", e.target.name);
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (password !== password2) {
			setAlert("Passwords do not match", "danger");
			console.log("passwords do not match");
		} else {
			register({ name, email, password });
		}
	};

	// Redirect if registration is successful
	if (isAuthenticated) {
		return <Redirect to='/dashboard' />;
	}

	return (
		<div className='login-page padding-40'>
			<h1 className='large text-primary'>Sign Up</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Create Your Account
			</p>
			<form className='form' onSubmit={(e) => onSubmit(e)}>
				<div className='form-group'>
					<input
						className='input-wide'
						type='text'
						placeholder='Name'
						name='name'
						value={name}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<input
						className='input-wide'
						type='email'
						placeholder='Email Address'
						value={email}
						name='email'
						onChange={(e) => onChange(e)}
					/>
					<br />
					<small className='form-text'>
						This site uses Gravatar so if you want a profile image, use a
						Gravatar email
					</small>
				</div>
				<div className='form-group'>
					<input
						className='input-wide'
						type='password'
						placeholder='Password'
						name='password'
						value={password}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<input
						className='input-wide'
						placeholder='Confirm Password'
						name='password2'
						value={password2}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<input
					style={{ width: "90%" }}
					type='submit'
					className='btn-wide '
					value='Register'
				/>
			</form>
			<p className=''>
				Already have an account? <Link to='/login'>Sign In</Link>
			</p>
		</div>
	);
};

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
