const { Schema, model } = require("mongoose");

const acomments = Schema({
    userID: {type: Number, index: true, unique: true},
    userName: {type: String, index: true, unique: true},
    comment: {type: String},
    commentID: {type: String, unique: true},
    timestamp: {type: Date, default: Date()},
    likes: {type: Number, default: 0},
    spam: {type: Boolean, default: false}
});

module.exports = model("acomments", acomments);