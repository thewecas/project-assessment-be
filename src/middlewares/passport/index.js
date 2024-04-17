const passport = require("passport");
const localStrategy = require("./local-strategy");
const { UserService } = require("../../service");

passport.serializeUser((user, done) => {
	return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	const user = await UserService.findUser(id);
	if (user) return done(null, user);
	else return done(null, false);
});

passport.use(localStrategy);
