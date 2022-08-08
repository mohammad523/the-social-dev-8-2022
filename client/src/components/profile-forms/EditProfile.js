/** @format */

import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import styles from "./Profile-forms.css";

const EditProfile = ({
	profile: { profile, loading },
	createProfile,
	getCurrentProfile,
	history,
}) => {
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

	useEffect(() => {
		getCurrentProfile();

		setFormData({
			company: loading || !profile.company ? "" : profile.company,
			website: loading || !profile.website ? "" : profile.website,
			location: loading || !profile.location ? "" : profile.location,
			status: loading || !profile.status ? "" : profile.status,
			skills: loading || !profile.skills ? "" : profile.skills.join(","),
			githubusername:
				loading || !profile.githubusername ? "" : profile.githubusername,
			bio: loading || !profile.bio ? "" : profile.bio,
			twitter: loading || !profile.social ? "" : profile.social.twitter,
			facebook: loading || !profile.social ? "" : profile.social.facebook,
			linkedin: loading || !profile.social ? "" : profile.social.linkedin,
			youtube: loading || !profile.social ? "" : profile.social.youtube,
			instagram: loading || !profile.social ? "" : profile.social.instagram,
		});
	}, [loading, getCurrentProfile]);

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
			<form className='edit-profile-form ' onSubmit={(e) => onSubmit(e)}>
				<div className='form-group'>
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
					<br />
					<small className='form-text block'>
						Give us an idea of where you are at in your career
					</small>
				</div>
				<div className='form-group'>
					<input
						className='profile-field'
						type='text'
						placeholder='Company'
						name='company'
						value={company}
						onChange={(e) => onChange(e)}
					/>
					<br />
					<small className='form-text block'>
						Could be your own company or one you work for
					</small>
				</div>
				<div className='form-group '>
					<input
						className='profile-field'
						type='text'
						placeholder='Website'
						name='website'
						value={website}
						onChange={(e) => onChange(e)}
					/>
					<br />
					<small className='form-text block'>
						Could be your own or a company website
					</small>
				</div>
				<div className='form-group'>
					<input
						className='profile-field'
						type='text'
						placeholder='Location'
						name='location'
						value={location}
						onChange={(e) => onChange(e)}
					/>
					<br />
					<small className='form-text block'>
						City & state suggested (eg. Boston, MA)
					</small>
				</div>
				<div className='form-group'>
					<input
						className='profile-field'
						type='text'
						placeholder='* Skills'
						name='skills'
						value={skills}
						onChange={(e) => onChange(e)}
					/>
					<br />
					<small className='form-text block'>
						Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
					</small>
				</div>
				<div className='form-group'>
					<input
						className='profile-field'
						type='text'
						placeholder='Github Username'
						name='githubusername'
						value={githubusername}
						onChange={(e) => onChange(e)}
					/>
					<br />
					<small className='form-text block'>
						If you want your latest repos and a Github link, include your
						username
					</small>
				</div>
				<div className='form-group'>
					<textarea
						className='profile-field'
						placeholder='A short bio of yourself'
						name='bio'
						value={bio}
						onChange={(e) => onChange(e)}
					/>
					<br />
					<small className='form-text block'>
						Tell us a little about yourself
					</small>
				</div>

				<div className='my-2'>
					<button
						onClick={() => toggleSocialInputs(!displaySocialInputs)}
						type='button'
						className='btn-narrow-2'
					>
						Add Social Network Links
					</button>
					<br />
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

				<input type='submit' className='btn-wide' />
				<Link className='p-15' to='/dashboard'>
					Go Back
				</Link>
			</form>
		</div>
	);
};

EditProfile.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
	withRouter(EditProfile)
);
