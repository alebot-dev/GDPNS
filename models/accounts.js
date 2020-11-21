const { Schema, model } = require("mongoose");

const accounts = Schema({
    accID: {type: Number, index: true, unique: true},
    //userID: {type: Number, index: true, unique: true}, // userID should always be the same as accID, hence it won't be used
    username: {type: String, index: true, unique: true},
    password: {type: String},
    email: {type: String, unique: true},
    friends: {type: Array},
    blocked: {type: Array},
	ms: {type: Number},
	frs: {type: Number},
    cs: {type: Number},
    registerDate: {type: Date, default: Date()},
    youtube: {type: String},
    twitter: {type: String},
    twitch: {type: String},
    ip: {type: String, unique: true}
});

module.exports = model("accounts", accounts);