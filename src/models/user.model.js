const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const User = sequelize.define("User", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.TEXT,
	},
	username: {
		type: DataTypes.TEXT,
		unique: true,
	},
	role: {
		type: DataTypes.ENUM("Examiner", "Examinee", "Admin", "SuperAdmin"),
		allowNull: false,
	},
	email: {
		type: DataTypes.TEXT,
		validate: {
			isEmail: true,
		},
	},
	display_pictutre: {
		type: DataTypes.TEXT,
		defaultValue: "link to default image",
	},
});

module.exports = User;
