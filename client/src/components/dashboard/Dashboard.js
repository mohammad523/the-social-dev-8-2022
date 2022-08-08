/** @format */

import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import styles from "./Dashboard.css";

const Dashboard = ({
	getCurrentProfile,
	deleteAccount,
	auth: { user },
	profile: { profile, loading },
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, [getCurrentProfile]);

	return loading && profile === null ? (
		<Spinner />
	) : (
		<div className='my-dashboard desktop'>
			<h1 className='dashboard-title'>Dashboard</h1>
			<p className='sub-header-dashboard '>
				<i className='fas fa-user' /> Welcome {user && user.name}
			</p>
			{profile !== null ? (
				<div className='dashboard-exp-edu'>
					<DashboardActions />
					<Experience experience={profile.experience} />
					<Education education={profile.education} />

					<div className='delete-account-btn'>
						<button className='btn-danger' onClick={() => deleteAccount()}>
							Delete My Account
						</button>
					</div>
				</div>
			) : (
				<Fragment>
					<p>You have not yet setup a profile, please add some info</p>
					<Link to='/create-profile' className='btn '>
						Create Profile
					</Link>
				</Fragment>
			)}
		</div>
	);
};

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	deleteAccount: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
	Dashboard
);
