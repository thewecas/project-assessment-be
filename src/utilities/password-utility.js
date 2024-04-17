const Bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
	const salt = await Bcrypt.genSalt();
	return Bcrypt.hash(password, salt);
};

const comparePassword = (raw, hash) => {
	return Bcrypt.compare(raw, hash);
};

module.exports = { hashPassword, comparePassword };
