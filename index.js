// The official index.js of this project (doot doot)
const express = require("express");
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");
const port = 8080;

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

app.use(express.json());

// yoinked from colon
let directories = [""];
fs.readdirSync('./endpoints').filter(x => !x.includes(".")).forEach(x => directories.push(x));
app.run = {}
directories.forEach(d => {
  fs.readdirSync('./endpoints/' + d).forEach(x => {if (x.includes('.')) app.run[x.split('.')[0]] = require('./endpoints/' + d + "/" + x) });
});

app.get("/database/accounts/registerGJAccount.php", function(req, res) { app.run.register(app, req, res) });
app.get("*", function(req, res) { res.send("not today") } );

app.listen(port, () => console.log(`[ALERT/express server] Server running on local port ${port}`));
