const { Schema, model } = require("mongoose");

const song = Schema({
    songID: {type: Number, unique: true, index: true},
    name: {type: String},
    authorID: {type: Number},
    authorName: {type: String},
    size: {type: String},
    download: {type: String},
    disabled: {type: Boolean}
});

module.exports = model("Song", song);