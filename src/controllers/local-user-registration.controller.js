const { UserService } = require("../service");
const { hashPassword } = require("../utilities/password-utility");

const localUserRegistration = async (req, res, next) => {
	const { name, username, role, password, email } = req.body;
	try {
		const user = await UserService.createUser(name, username, email, role);
		const encryptPassword = await hashPassword(password);
		const userAuth = await UserService.createLocalAuth(
			user.id,
			email,
			encryptPassword
		);

		return res.status(201).json({
			message: "User Registered",
		});
	} catch (error) {
		return next(error);
	}
};
module.exports = localUserRegistration;
