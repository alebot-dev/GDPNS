const { Schema, model } = require("mongoose");

const mapPack = Schema({
    ID: {type: Number, unique: true, index: true},
    name: {type: String, unique: true},
    levels: {type: Array},
    stars: {type: Number},
    coins: {type: Number},
    difficulty: {type: Number},
    col1: {type: String},           // use a hex colour and parse hex to rgb
    col2: {type: String}
});

module.exports = model("MapPack", mapPack);