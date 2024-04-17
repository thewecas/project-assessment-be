const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Topic = sequelize.define("Topic", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.TEXT,
		unique: true,
		allowNull: false,
	},
	description: {
		type: DataTypes.TEXT,
	},
});

module.exports = Topic;
