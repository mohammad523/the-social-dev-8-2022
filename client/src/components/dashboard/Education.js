/** @format */

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";
import { connect } from "react-redux";
import { deleteEducation } from "../../actions/profile";
import styles from "./Dashboard.css";

const Education = ({ education, deleteEducation }) => {
	const educations = education.map((edu) => (
		<tr key={edu._id} style={{ backgroundColor: "none" }}>
			<td>{edu.school}</td>
			<td className='hide-sm'>{edu.degree}</td>
			<td>
				<Moment format='YYYY/MM/DD'>{moment.utc(edu.from)}</Moment> -{" "}
				{edu.to === null ? (
					" Now"
				) : (
					<Moment format='YYYY/MM/DD'>{moment.utc(edu.to)}</Moment>
				)}
			</td>
			<td>
				<button
					onClick={() => deleteEducation(edu._id)}
					className='btn btn-danger'
				>
					Delete
				</button>
			</td>
		</tr>
	));

	return (
		<div className='edu-div'>
			<h3 className='my-2'>Education Credentials</h3>
			<table className='table'>
				<thead>
					<tr className='tr-edu'>
						<th>School</th>
						<th className='hide-sm' style={{ backgroundColor: "none" }}>
							Degree
						</th>
						<th className='hide-sm'>Years</th>
						<th />
					</tr>
				</thead>
				<tbody>{educations}</tbody>
			</table>
		</div>
	);
};

Education.propTypes = {
	education: PropTypes.array.isRequired,
	deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
