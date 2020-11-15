const { Schema, model } = require("mongoose");

const message = Schema({
    accID: {type: Number},
    subject: {type: String},
    body: {type: String},
    messageID: {type: Number, unique: true, index: true},
    recieverID: {type: Number},
    timestamp: {default: new Date().getTime()},
    new: {type: Boolean, default: true}
});

module.exports = model("Message", message);