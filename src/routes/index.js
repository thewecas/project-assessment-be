const { ErrorHandler, AccessHandler } = require("../middlewares");
const router = require("express").Router();
const AuthRoutes = require("./auth.route");
const UserRoutes = require("./user.route");

router.use("/auth", AuthRoutes);

router.use(AccessHandler);

router.use("/user", UserRoutes);

router.use(ErrorHandler);

module.exports = router;
