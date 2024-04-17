const sequelize = require("../sequelize");

const ClearSession = () => {
	return sequelize.query(
		`DELETE FROM session WHERE expire < CURRENT_TIMESTAMP;`
	);
};

module.exports = ClearSession;
