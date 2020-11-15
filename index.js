// The official index.js of this project (doot doot)
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const endpoints = require("./endpoints/index");

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.Promise = global.Promise;
const dbOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	poolSize: 5,
	connectTimeoutMS: 10000,
	family: 4
}

mongoose.connect("mongodb://127.0.0.1:6969/gdnps", dbOptions);
mongoose.connection.on("connected", () => {
	console.log("[ALERT/mongoose] Mongoose connected at port 6969")
});
mongoose.connection.on("error", err => {
	console.error(err);
});

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/", endpoints.register);

app.get("*", (req, res) => {
	res.send("Haha nooooooooOOOOOOOOOOOOOOOOOOOOOO");
});

app.listen(port, () => console.log(`[ALERT/express server] Server running on local port ${port}`));
