/** @format */

const mongoose = require("mongoose");
const config = require("config");
require("dotenv").config();

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGOURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log("MongoDB connected.........");
	} catch (err) {
		console.log(err.message);
		///exit process with failure, we want the process to exit
		process.exit(1);
	}
};

module.exports = connectDB;
