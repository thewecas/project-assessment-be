const { Strategy } = require("passport-local");
const { UserService } = require("../../service");
const { comparePassword } = require("../../utilities/password-utility");

const strategyOptions = {
	usernameField: "email",
};
const verifyFn = async (email, password, done) => {
	try {
		if (!email || !password) throw new Error("Credentials Missing");
		const userAuth = await UserService.findLocalAuth(email);
		if (!userAuth) throw new Error("User Not found");
		const isValidCredentials = await comparePassword(
			password,
			userAuth.password
		);
		if (!isValidCredentials) throw new Error("Invalid Credentials");

		const user = {
			...userAuth.User.dataValues,
			email: userAuth.dataValues.email,
			last_login: userAuth.dataValues.email,
		};
		done(null, user);
	} catch (error) {
		done(error, null);
	}
};

const localStrategy = new Strategy(strategyOptions, verifyFn);

module.exports = localStrategy;
