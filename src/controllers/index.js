const localUserRegistration = require("./local-user-registration.controller");
const login = require("./login.controller");

const AuthController = { localUserRegistration, login };

module.exports = { AuthController };
