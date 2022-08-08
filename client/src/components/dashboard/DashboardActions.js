/** @format */

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.css";

const DashboardActions = () => {
	return (
		<div className='dash-buttons'>
			<Link to='/edit-profile' className='btn-narrow '>
				{/* <i className='fas fa-user-circle text-primary' /> */}
				Edit Profile
			</Link>
			<Link to='/add-experience' className='btn-narrow '>
				{/* <i className='fab fa-black-tie text-primary' />  */}
				Add Experience
			</Link>
			<Link to='/add-education' className='btn-narrow'>
				{/* <i className='fas fa-graduation-cap text-primary' />  */}
				Add Education
			</Link>
		</div>
	);
};

export default DashboardActions;
