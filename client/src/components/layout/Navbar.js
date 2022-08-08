/** @format */

import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { ReactComponent as Programmer } from "../../programmer.svg";
import styles from "./Navbar.css";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul className='nav-links auth-nav'>
			<li>
				<Link to='/'>
					<div className='nav-auth-logo'>
						<Programmer className='programmer-icon-small' />
					</div>
				</Link>
			</li>

			<li className='nav-links-li '>
				<Link className='nav-icon' to='/posts'>
					<i class='fa-solid fa-house'></i>
					<span className='nav-desktop-render'>Posts</span>
					<p className='nav-link-title'>Home</p>
				</Link>
			</li>
			<li className='nav-links-li '>
				<Link className='nav-icon' to='/profiles'>
					<i className='fa-solid fa-magnifying-glass'></i>
					<span className='nav-desktop-render'>Users</span>
					<p className='nav-link-title'>Users</p>
				</Link>{" "}
			</li>
			<li className='nav-links-li '>
				<Link className='nav-icon' to='/dashboard'>
					<i className=' fas fa-user' />
					<p className='nav-link-title'>Profile</p>
				</Link>
			</li>
			<li className='nav-links-li '>
				<Link className='nav-icon' onClick={logout} to='/'>
					<i className='fas fa-sign-out-alt' />
					<p className='nav-link-title'>Logout</p>
				</Link>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul className='guest-nav'>
			<Link className='' to='/'>
				<Programmer className='programmer-icon-small' />
			</Link>
		</ul>
	);

	return (
		<nav className='navbar'>
			{!loading && (
				<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
			)}
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
