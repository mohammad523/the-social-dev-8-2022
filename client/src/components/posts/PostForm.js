/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import styles from "./Posts.css";

const PostForm = ({ addPost }) => {
	const [text, setText] = useState("");

	return (
		<div className='posts-form'>
			<form
				className='flex-form'
				onSubmit={(e) => {
					e.preventDefault();
					addPost({ text });
					setText("");
				}}
			>
				<ul className='post-form-ul'>
					<li className='new-post-top'>
						<i class='new-post-icon fa-solid fa-user'></i>
					</li>
					<div className='post-form-ul-second-container'>
						<li>
							<span className='everyone'>Visible to Everyone</span>
						</li>
						<li>
							<textarea
								className='new-post-field'
								name='text'
								cols='30'
								placeholder="What's on your mind?"
								value={text}
								onChange={(e) => setText(e.target.value)}
								required
								autocomplete='off'
							/>
						</li>
						<li>
							<input type='submit' className='post-btn ' value='Submit' />
						</li>
					</div>
				</ul>
			</form>
		</div>
	);
};

PostForm.propTypes = {
	addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
