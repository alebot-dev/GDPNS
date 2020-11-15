const { Schema, model } = require("mongoose");

const gauntlet = Schema({
    ID: {type: Number, unique: true, index: true},
    levels: {type: Array}
});

module.exports = model("Gauntlet", gauntlet);