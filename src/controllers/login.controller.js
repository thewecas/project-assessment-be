const login = async (req, res, next) => {
	if (req.user) {
		res.send("User Logged in");
	}
};

module.exports = login;
