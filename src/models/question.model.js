const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Question = sequelize.define("Question", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	title: {
		type: DataTypes.TEXT,
		unique: true,
		allowNull: false,
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false,
		comment: "Add WYISWYG support",
	},
	answer_type: {
		type: DataTypes.ENUM("SingleSelect", "MultiSelect", "FreeForm"),
		allowNull: false,
	},
	max_allocated_marks: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	max_allocated_time: {
		type: DataTypes.INTEGER,
		defaultValue: 60,
		comment: "Value given in Seconds",
	},
	selection_score: {
		type: DataTypes.FLOAT,
		allowNull: false,
		defaultValue: 0,
		comment:
			"Used to select a question, Calulated as percentage of No. of times the question has been answered correctly to No. of times question has appeared in an assessment. Least the value, higher chances of selection",
	},
	instructions: {
		type: DataTypes.TEXT,
		comment: "Instructions for the Examinee about the question",
	},
	difficulty: {
		type: DataTypes.ENUM("Easy", "Medium", "Hard", "Expert"),
		allowNull: false,
	},
	visibility: {
		type: DataTypes.ENUM("Public", "Private"),
		defaultValue: "Public",
	},
	author_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		comment: "User's id who created the question",
	},
});

module.exports = Question;
