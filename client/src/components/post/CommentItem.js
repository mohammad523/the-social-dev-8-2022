/** @format */

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";
import styles from "./Post.css";

const CommentItem = ({
	postId,
	comment: { _id, text, name, avatar, user, date },
	auth,
	deleteComment,
}) => (
	<div className='comment-item'>
		<div>
			<Link className='img-name' to={`/profile/${user}`}>
				<img className='post-item-img' src={avatar} alt='' />
			</Link>
		</div>
		<div className='comment-item-content'>
			<div className='name-date flex-row'>
				<p>
					<Link className='post-user-name' to={`/profile/${user}`}>
						{name}
					</Link>
				</p>

				<p className='comment-date post-date'>
					<Moment format='MM/DD/YYYY'>{date}</Moment>
				</p>
			</div>
			<div className='post-text-div'>
				<p className='post-item-text'>{text}</p>
			</div>
			<div className='comment-action'>
				{!auth.loading && user === auth.user._id && (
					<button
						onClick={() => deleteComment(postId, _id)}
						type='button'
						className='small-btn'
					>
						<i className='fas fa-times' />
					</button>
				)}
			</div>
		</div>
	</div>
);

CommentItem.propTypes = {
	postId: PropTypes.string.isRequired,
	comment: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
