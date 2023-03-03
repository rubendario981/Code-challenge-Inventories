require("dotenv").config();
const server = require("./src/app.js");
const { createUsers, createActives } = require("./src/config/populateDB.js");
const { conn } = require("./src/db.js");

const port = process.env.PORT || 0

const app = server.listen(port, () => {
	console.log("Server listening at port", app.address().port);
});

conn.sync({ force: true }).then(async () => {
	// Populate some data
	await createUsers()
	await createActives()
});
