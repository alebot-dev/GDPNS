const { Schema, model } = require("mongoose");

const comment = Schema({
    userID: {type: Number},
    userName: {type: String},
    comment: {type: String},
    levelID: {type: String},
    commentID: {type: String, unique: true},
    timestamp: {default: new Date().getTime()},
    likes: {type: Number, defualt: 0},
    percent: {type: Number, default: 0},
    spam: {type: Boolean, default: false}
});

module.exports = model("Comment", comment);
