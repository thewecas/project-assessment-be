const { User } = require("../models");

const FindUser = (id) => {
	return User.findByPk(id);
};

module.exports = FindUser;
