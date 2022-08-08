/** @format */

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Profiles.css";

const ProfileItem = ({
	profile: {
		user: { _id, name, avatar },
		status,
		company,
		location,
		skills,
	},
}) => {
	return (
		<div className='profile-list-item'>
			<div className='profiles-big-div'>
				<div className='profile-flexbox'>
					<img src={avatar} alt='' className='small-round-dp' />
				</div>

				<div className='profile-grid'>
					<h2 className='profiles-name'>{name}</h2>
					<p>
						{status} {company && <span> at {company}</span>}
					</p>
					<p className=''>{location && <span>{location}</span>}</p>
					<Link to={`/profile/${_id}`} className=''>
						View Profile
					</Link>
				</div>
			</div>
			<ul className='skills'>
				{skills.slice(0, 4).map((skill, index) => (
					<li key={index} className='text-primary'>
						<i className='fas fa-check' /> {skill}
					</li>
				))}
			</ul>
		</div>
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileItem;
