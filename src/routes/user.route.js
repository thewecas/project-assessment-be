const router = require("express").Router();

router.get("/test", (req, res) => {
	console.log("Requested User ", req.user);
	res.send(req.user);
	console.log("-> ", req.isAuthenticated());
});

module.exports = router;
