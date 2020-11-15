const { Schema, model } = require("mongoose");

const friendReq = Schema({
    accountID: {type: Number},
    partialFriendID: {type: Number},
    message: {type: String},
    sentDate: {default: new Date()},
    ID: {type: Number, unique: true},
    new: {type: Boolean, default: true}
});

module.exports = model("FriendReq", friendReq);