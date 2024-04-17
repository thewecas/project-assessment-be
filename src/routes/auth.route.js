const router = require("express").Router();
const { AuthController } = require("../controllers");
const passport = require("passport");

router.post("/register", AuthController.localUserRegistration);
router.post("/login", passport.authenticate("local"), AuthController.login);

module.exports = router;
