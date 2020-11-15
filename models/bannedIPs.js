const { model, Schema } = require("mongoose");

const bannedIPs = Schema({
    IPs: {type: Array}
});

module.exports = model("BannedIPs", bannedIPs);