/** @format */

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import { getPosts } from "../../actions/post";
import styles from "./Posts.css";

const Posts = ({ getPosts, post: { posts, loading } }) => {
	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return loading ? (
		<Spinner />
	) : (
		<div className='home desktop'>
			<div className='home-sticky-header'>
				<h1>Home</h1>
			</div>
			<div className='form-holder no-bg' style={{ backgroundColor: "none" }}>
				<PostForm />
			</div>
			<div className='posts-feed'>
				<div className='posts'>
					{posts.map((post) => (
						<PostItem key={post._id} post={post} />
					))}
				</div>
			</div>
		</div>
	);
};

Posts.propTypes = {
	getPosts: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
