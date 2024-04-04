const { Sequelize } = require("sequelize");

console.log(process.env.DB_CONNECTION_STRING);
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
	logging: process.env.NODE_ENV == "production" ? false : console.log,
});

sequelize
	.authenticate()
	.then((_) => {
		console.log("DB connected");
	})
	.catch((err) => {
		console.log("DB connection failed with error ", err);
	});

module.exports = sequelize;
