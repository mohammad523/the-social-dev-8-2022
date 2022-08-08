/** @format */

import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";
import styles from "./Profile-forms.css";

const CreateProfile = ({ createProfile, history }) => {
	const [formData, setFormData] = useState({
		company: "",
		website: "",
		location: "",
		status: "",
		skills: "",
		githubusername: "",
		bio: "",
		twitter: "",
		facebook: "",
		linkedin: "",
		youtube: "",
		instagram: "",
	});

	const [displaySocialInputs, toggleSocialInputs] = useState(false);

	const {
		company,
		website,
		location,
		status,
		skills,
		githubusername,
		bio,
		twitter,
		facebook,
		linkedin,
		youtube,
		instagram,
	} = formData;

	const onSubmit = (e) => {
		e.preventDefault();
		createProfile(formData, history, true);
	};

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	return (
		<div className='profile-widget-inner'>
			<h1 className='create-profile-header'>Create Your Profile</h1>
			<p className='create-profile-lead'>
				<i className='fas fa-user' /> Let's get some information to make your
				profile stand out
			</p>
			<p className='p-15 border-b'>* = required field</p>
			<form className='form' onSubmit={(e) => onSubmit(e)}>
				<div className='form-group '>
					<select
						className=' profile-field'
						name='status'
						value={status}
						onChange={(e) => onChange(e)}
					>
						<option value='0'>* Select Professional Status</option>
						<option value='Developer'>Developer</option>
						<option value='Junior Developer'>Junior Developer</option>
						<option value='Senior Developer'>Senior Developer</option>
						<option value='Manager'>Manager</option>
						<option value='Student or Learning'>Student or Learning</option>
						<option value='Instructor'>Instructor or Teacher</option>
						<option value='Intern'>Intern</option>
						<option value='Other'>Other</option>
					</select>
					<h6 className='form-info block'>
						Give us an idea of where you are at in your career
					</h6>
				</div>
				<div className='form-group'>
					<input
						className=' profile-field'
						type='text'
						placeholder='Company'
						name='company'
						value={company}
						onChange={(e) => onChange(e)}
					/>

					<p className='form-text'>
						Could be your own company or one you work for
					</p>
				</div>
				<div className='form-group'>
					<input
						className=' profile-field'
						type='text'
						placeholder='Website'
						name='website'
						value={website}
						onChange={(e) => onChange(e)}
					/>

					<p className='form-text'>Could be your own or a company website</p>
				</div>
				<div className='form-group'>
					<input
						className=' profile-field'
						type='text'
						placeholder='Location'
						name='location'
						value={location}
						onChange={(e) => onChange(e)}
					/>

					<p className='form-text'>City & state suggested (eg. Boston, MA)</p>
				</div>
				<div className='form-group'>
					<input
						className=' profile-field'
						type='text'
						placeholder='* Skills'
						name='skills'
						value={skills}
						onChange={(e) => onChange(e)}
					/>

					<p className='form-text'>
						Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
					</p>
				</div>
				<div className='form-group'>
					<input
						className=' profile-field'
						type='text'
						placeholder='Github Username'
						name='githubusername'
						value={githubusername}
						onChange={(e) => onChange(e)}
					/>

					<p className='form-text'>
						If you want your latest repos and a Github link, include your
						username
					</p>
				</div>
				<div className='form-group'>
					<textarea
						className=' profile-field'
						placeholder='A short bio of yourself'
						name='bio'
						value={bio}
						onChange={(e) => onChange(e)}
					/>
					<br />

					<p className='form-text'>Tell us a little about yourself</p>
				</div>

				<div className='my-2'>
					<button
						onClick={() => toggleSocialInputs(!displaySocialInputs)}
						type='button'
						className='btn-narrow-2'
					>
						Add Social Network Links
					</button>
					<span>Optional</span>
				</div>
				{displaySocialInputs && (
					<Fragment>
						<div className='form-group social-input'>
							<i className='fab fa-twitter fa-2x' />
							<input
								className='profile-field'
								type='text'
								placeholder='Twitter URL'
								name='twitter'
								value={twitter}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-facebook fa-2x' />
							<input
								className='profile-field'
								type='text'
								placeholder='Facebook URL'
								name='facebook'
								value={facebook}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-youtube fa-2x' />
							<input
								className='profile-field'
								type='text'
								placeholder='YouTube URL'
								name='youtube'
								value={youtube}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-linkedin fa-2x' />
							<input
								className='profile-field'
								type='text'
								placeholder='Linkedin URL'
								name='linkedin'
								value={linkedin}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-instagram fa-2x' />
							<input
								className='profile-field'
								type='text'
								placeholder='Instagram URL'
								name='instagram'
								value={instagram}
								onChange={(e) => onChange(e)}
							/>
						</div>
					</Fragment>
				)}

				<input type='submit' className='btn-wide ' />
				<br />
				<Link className='btn btn-light' to='/dashboard'>
					Go Back
				</Link>
			</form>
		</div>
	);
};

CreateProfile.propTypes = {
	createProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(null, { createProfile })(withRouter(CreateProfile));
