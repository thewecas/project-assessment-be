const { User } = require("../models");

const createUser = (name, username, email, role) => {
	const newUser = User.build({ name, username, email, role });
	return newUser.save();
};

module.exports = createUser;
