/** @format */

import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ReactComponent as Programmer } from "../../programmer.svg";
import styles from "./Landing.css";

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to='/dashboard' />;
	}
	return (
		<div className='landing'>
			<div className='landing-one'>
				<h1 className='large-font'>The Social Dev</h1>
				<h2>Join The Social Dev today.</h2>
				<p className='lead'>The new social network, designed for developers.</p>
				<div className='btnLandingDiv'>
					<Link to='/login'>
						<button className='btn-wide'>Sign In</button>
					</Link>
					<br />
					<Link to='/register'>
						<button className='btn-wide'>Sign Up</button>
					</Link>
					<br />
				</div>
			</div>
			<Programmer className='big-programmer' />
		</div>
	);
};
Landing.propTypes = {
	isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Landing);
