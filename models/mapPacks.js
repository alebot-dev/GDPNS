const { Schema, model } = require("mongoose");

const mapPack = Schema({
    packID: {type: Number, unique: true, index: true},
    name: {type: String, unique: true},
    levels: {type: Array},
    stars: {type: Number},
    coins: {type: Number},
    difficulty: {type: Number},
    col1: {type: String},           // use a hex colour and parse hex to int
    col2: {type: String}
});

module.exports = model("MapPack", mapPack);