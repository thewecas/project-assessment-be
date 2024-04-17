const createUser = require("./create-user.service");
const createLocalAuth = require("./create-local-auth.service");
const findLocalAuth = require("./find-local-auth.service");
const findUser = require("./find-user.service");
const clearSession = require("./clear-session.service");

const UserService = { createUser, createLocalAuth, findLocalAuth, findUser };
const SessionService = { clearSession };
module.exports = { UserService, SessionService };
