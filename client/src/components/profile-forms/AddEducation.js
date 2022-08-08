/** @format */

import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";
import styles from "./Profile-forms.css";

const AddEducation = ({ addEducation, history }) => {
	const [formData, setFormData] = useState({
		school: "",
		degree: "",
		fieldofstudy: "",
		from: "",
		to: "",
		current: false,
		description: "",
	});

	const [toDateDisabled, toggleDisabled] = useState(false);

	const {
		school,
		degree,
		fieldofstudy,
		from,
		to,
		current,
		description,
	} = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	return (
		<div className='add-edu-widget'>
			<h1 className='p-15'>Add Your Education</h1>
			<p className='create-profile-lead'>
				<i className='fas fa-code-branch' /> Add any school or bootcamp that you
				have attended in the past
			</p>
			<small className='p-15'>* = required field</small>
			<form
				className='edit-profile-form'
				onSubmit={(e) => {
					e.preventDefault();
					addEducation(formData, history);
				}}
			>
				<div className=''>
					<input
						className='profile-field'
						type='text'
						placeholder='* School or Bootcamp'
						name='school'
						value={school}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className=''>
					<input
						className='profile-field'
						type='text'
						placeholder='* Degree or Certificate'
						name='degree'
						value={degree}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className=''>
					<input
						className='profile-field'
						type='text'
						placeholder='Field Of Study'
						name='fieldofstudy'
						value={fieldofstudy}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className=''>
					<h4>From Date</h4>
					<input
						className='profile-field'
						type='date'
						name='from'
						value={from}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className=''>
					<p>
						<input
							className='fs-20'
							type='checkbox'
							name='current'
							checked={current}
							value={current}
							onChange={() => {
								setFormData({ ...formData, current: !current });
								toggleDisabled(!toDateDisabled);
							}}
						/>
						{"  "}
						Currently Studying
					</p>
				</div>
				<div className=''>
					<h4>To Date</h4>
					<input
						className='profile-field'
						type='date'
						name='to'
						value={to}
						onChange={(e) => onChange(e)}
						disabled={toDateDisabled ? "disabled" : ""}
					/>
				</div>
				<div className=''>
					<textarea
						className='profile-field'
						name='description'
						cols='30'
						rows='5'
						placeholder='Program Description'
						value={description}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<input type='submit' className='btn-wide ' />
				<Link className='p-15' to='/dashboard'>
					Go Back
				</Link>
			</form>
		</div>
	);
};

AddEducation.propTypes = {
	addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
