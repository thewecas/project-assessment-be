const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const QuestionTopic = sequelize.define("QuestionTopic", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	question_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
	},
	topic_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
	},
});

module.exports = QuestionTopic;
