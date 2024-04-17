const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Category = sequelize.define("Category", {
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

module.exports = Category;
