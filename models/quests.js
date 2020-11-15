const { Schema, model } = require("mongoose");

const quest = Schema({
    ID: {type: Number, unique: true, index: true},
    type: {type: Number},
    amount: {type: Number},
    reward: {type: Number},
    name: {type: String}
});

module.exports = model("Quest", quest);