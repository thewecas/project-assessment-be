require("dotenv").config();
const express = require("express");
const Routes = require("./routes");
const passport = require("passport");
const session = require("express-session");
const pgSessionStore = require("connect-pg-simple")(session);

const app = express();
const port = process.env.PORT || 3000;
const baseURL = process.env.BASE_URL;

//Allow cross origin resource sharing
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const memoryStore = new pgSessionStore({
	conString: process.env.DB_CONNECTION_STRING,
	createTableIfMissing: true,
});

app.use(
	session({
		store: memoryStore,
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 5000 }, // 1 day
	})
);

app.use(passport.initialize());
app.use(passport.session());

require("./middlewares/passport");
//routes
app.use((req, res, next) => {
	console.log(memoryStore);
	next();
});
app.use(baseURL, Routes);

//cron job to clear the expired session
require("./utilities/clear-session");

//Start listening to request
app.listen(port, () => console.log(`Server Online, Listening to ${port}`));
