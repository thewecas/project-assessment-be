const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../sequelize");

const UserAuth = sequelize.define(
	"UserAuth",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		user_id: {
			type: DataTypes.INTEGER,
		},
		auth_provider: {
			type: DataTypes.ENUM("local", "google"),
			allowNull: false,
		},
		auth_id: {
			type: DataTypes.TEXT,
			unique: true,
		},
		email: {
			type: DataTypes.TEXT,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		last_login: {
			type: DataTypes.DATE,
			defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
		},
	},
	{
		hooks: {
			beforeValidate: async (UserAuth, {}) => {
				if (
					UserAuth.auth_provider == "local" &&
					(!UserAuth.email || !UserAuth.password)
				) {
					throw new Error(
						"Email and Password is required for local auth_provider"
					);
				} else if (UserAuth.auth_provider != "local" && !auth_id) {
					throw new Error(
						"Auth id is required when auth provider is other than local"
					);
				}
			},
		},
	}
);

module.exports = UserAuth;
