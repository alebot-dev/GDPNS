const { Schema, model } = require("mongoose");

const accounts = Schema({
    accID: {type: Number, index: true, unique: true},
    userID: {type: Number, index: true, unique: true},
    username: {type: String, index: true, unique: true},
    password: {type: String},
    email: {type: String, unique: true},
    saveData: {type: String},
    isAdmin: {type: Boolean, default: false},
    friends: {type: Array},
    blocked: {type: Array},
    blockedBy: {type: Array},
    messages: {type: Number},
    friendReqs: {type: Number},
    cs: {type: Number},                                     // what the fuck is a cs
    registerDate: {default: Date()},
    friendsCount: {type: Number},
    youtube: {type: String},
    twitter: {type: String},
    twitch: {type: String},
    ip: {type: String, unique: true}
});

module.exports = model("accounts", accounts);
