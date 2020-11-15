const { Schema, model } = require("mongoose");

const accounts = Schema({
    accID: {type: Number, index: true, unique: true},
    userID: {type: Number, index: true, unique: true},
    username: {type: String, index: true, unique: true},
    password: {type: String},
    email: {type: String, unique: true},
    friends: {type: Array},
    blocked: {type: Array},
<<<<<<< HEAD
    blockedBy: {type: Array},
    messages: {type: Number},
    friendReqs: {type: Number},
    cs: {type: Number},                                     // what the fuck is a cs
=======
    cs: {type: Number}, // Comment History, no known use afaik
>>>>>>> d89c5857a6c5a3d3cb55229f48d9f3670580b643
    registerDate: {default: Date()},
    youtube: {type: String},
    twitter: {type: String},
    twitch: {type: String},
    ip: {type: String, unique: true}
});

module.exports = model("accounts", accounts);