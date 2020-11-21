const { model, Schema } = require("mongoose");

const bans = Schema({
	accounts: {type: Array}, // banned accounts
	IPs: {type: Array} // banned IPs, if people try to bypass bans by making a new acc
});

module.exports = model("BannedIPs", bans);