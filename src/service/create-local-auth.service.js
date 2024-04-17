const { UserAuth } = require("../models");

const createLocalAuth = async (id, email, password) => {
	const newAuth = UserAuth.build({
		user_id: id,
		auth_provider: "local",
		email,
		password,
	});
	return newAuth.save();
};

module.exports = createLocalAuth;
