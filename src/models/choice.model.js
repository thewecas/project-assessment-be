const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Choice = sequelize.define("Choice", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	question_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});

module.exports = Choice;
