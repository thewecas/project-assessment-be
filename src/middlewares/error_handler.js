require("dotenv").config();
const errorHandler = (err, req, res, next) => {
	console.log("Oh No, Error..! ");
	console.log(err);
	const errStatus = err.status || 500;
	const errMsg = err.message || "Something went wrong";

	res.status(errStatus).json({
		status: errStatus,
		message: errMsg,
		stack: process.env.NODE_ENV === "development" ? err.stack : {},
	});
};

module.exports = errorHandler;
