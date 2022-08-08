/** @format */

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({
	addLike,
	removeLike,
	deletePost,
	auth,
	post: { _id, text, name, avatar, user, likes, comments, date },
	showActions,
}) => (
	<div className='post-item'>
		<div>
			<Link className='img-name' to={`/profile/${user}`}>
				<img className='post-item-img' src={avatar} alt='' />
			</Link>
		</div>
		<div className='post-item-content'>
			<div className='name-date'>
				<Link className='post-user-name' to={`/profile/${user}`}>
					{name}
				</Link>
				<Moment className='post-date' format='MM/DD/YYYY'>
					{date}
				</Moment>
			</div>

			<div className='post-text-div'>
				<p className='post-item-text'>{text}</p>
			</div>

			{showActions && (
				<div className='post-actions'>
					<span>
						<button
							onClick={() => addLike(_id)}
							type='button'
							className='small-btn '
						>
							<i className='fas fa-thumbs-up' />{" "}
						</button>
						<span className='action-name'>Like</span>{" "}
						<span>{likes.length > 0 && <span>({likes.length})</span>}</span>
					</span>
					<span>
						<button
							onClick={() => removeLike(_id)}
							type='button'
							className='small-btn '
						>
							<i className='fas fa-thumbs-down' />
						</button>
						<span className='action-name'>Unlike</span>
					</span>

					<span className='comment-button'>
						<span className='small-btn'>
							<Link to={`/posts/${_id}`}>
								<i class='fa-solid fa-comment'></i>

								{comments.length > 0 && (
									<span className='comment-count'>({comments.length})</span>
								)}
							</Link>
						</span>
						<span className='action-name'>Comment</span>
					</span>

					{!auth.loading && user === auth.user._id && (
						<span>
							<button
								onClick={() => deletePost(_id)}
								type='button'
								className='small-btn'
							>
								<i className='fas fa-times' />
							</button>
						</span>
					)}
				</div>
			)}
		</div>
	</div>
);

PostItem.defaultProps = {
	showActions: true,
};

PostItem.propTypes = {
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	addLike: PropTypes.func.isRequired,
	removeLike: PropTypes.func.isRequired,
	deletePost: PropTypes.func.isRequired,
	showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
	PostItem
);
