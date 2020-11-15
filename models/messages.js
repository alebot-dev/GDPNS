const { Schema, model } = require("mongoose");

const message = Schema({
    userID: {type: Number},
    userName: {type: String},
    subject: {type: String},
    body: {type: String},
    accID: {type: Number},       // Do we need this?
    messageID: {type: Number, unique: true, index: true},
    recieverID: {type: Number},
    timestamp: {default: new Date().getTime()},
    new: {type: Boolean, default: true}
});

module.exports = model("Message", message);