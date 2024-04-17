require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
	logging: process.env.NODE_ENV == "development" ? console.log : false,
});

sequelize
	.authenticate()
	.then((_) => {
		console.log("Db connection succcess");
	})
	.catch((_) => {
		console.log("DBconnection failed");
	});

module.exports = sequelize;
