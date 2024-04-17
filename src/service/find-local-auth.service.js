const { UserAuth, User } = require("../models");

const FindLocalAuth = (email) => {
	return UserAuth.findOne({ where: { email }, include: User });
};

module.exports = FindLocalAuth;
