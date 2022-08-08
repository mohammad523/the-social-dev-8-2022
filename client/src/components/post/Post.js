/** @format */

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getPost } from "../../actions/post";
import PostItem from "../posts/PostItem";
import { Link } from "react-router-dom";
import CommentForm from "../post/CommentForm";
import CommentItem from "./CommentItem";
import styles from "./Post.css";

const Post = ({ getPost, post: { post, loading }, match }) => {
	useEffect(() => {
		getPost(match.params.id);
	}, [getPost]);
	return loading || post === null ? (
		<Spinner />
	) : (
		<div className='post-div'>
			<div className=''>
				<PostItem post={post} showActions={false} />
			</div>
			<div className='comments-list'>
				{post.comments.map((comment) => (
					<CommentItem key={comment._id} comment={comment} postId={post._id} />
				))}
				<CommentForm postId={post._id} />

				<Link to='/posts' className='back-comment-link '>
					Back to posts
				</Link>
			</div>
		</div>
	);
};

Post.propTypes = {
	getPost: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
