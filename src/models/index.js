const Question = require("./question.model");
const Topic = require("./topic.model");
const Category = require("./category.model");
const QuestionTopic = require("./question-topic.model");
const Choice = require("./choice.model");
const User = require("./user.model");
const UserAuth = require("./user-auth.model");
const sequelize = require("../sequelize");

// Each question belongs to one category
Question.belongsTo(Category, {
	foreignKey: "category_id",
});
// A category can have mamy questions
Category.hasMany(Question, {
	foreignKey: "category_id",
});

//Each Question can belong to many topic, associated using another table `QuestionTopic`
Question.belongsToMany(Topic, {
	through: QuestionTopic,
	foreignKey: "question_id",
});

// Each Topic may have many questions, associated using another table `QuestionTopic`
Topic.belongsToMany(Question, {
	through: QuestionTopic,
	foreignKey: "topic_id",
});

//Question is created by one user
Question.belongsTo(User, { foreignKey: "author_id" });

// One User can create multiple questions
User.hasMany(Question, { foreignKey: "author_id" });

// Question May have many choices
Question.hasMany(Choice, {
	foreignKey: "question_id",
});

// Multiple choices can be given to a single question
Choice.belongsTo(Question, {
	foreignKey: "question_id",
});

//User can have  many authentication
User.hasMany(UserAuth, {
	foreignKey: "user_id",
});

// One auth belongs to only one user
UserAuth.belongsTo(User, {
	foreignKey: "user_id",
});

sequelize.sync({ alter: true });

module.exports = {
	User,
	UserAuth,
	Question,
	Topic,
	Category,
	Choice,
	QuestionTopic,
};
