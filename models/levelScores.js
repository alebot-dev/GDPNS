const { Schema, model } = require("mongoose");

const levelScore = Schema({
    accountID: {type: Number, index: true, unique: true},
    levelID: {type: Number},
    percent: {type: Number},
    uploadDate: {type: Date, default: new Date()},
    attempts: {type: Number, default: 0},
    coins: {type: Number, default: 0}
});

module.exports = model("LevelScore", levelScore);