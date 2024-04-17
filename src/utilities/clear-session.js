const cron = require("node-cron");
const { SessionService } = require("../service");

const task = cron.schedule("0 0 0 * * *", async () => {
	try {
		const response = await SessionService.clearSession();
		console.log("CRON JOB ", response);
	} catch (error) {
		console.log(error);
	}
});

task.start();
