const { Schema, model } = require("mongoose");

const cpshare = Schema({
    shareID: {type: Number, unique: true, index: true},
    levelID: {type: Number, index: true},
    userID: {type: Number}
});

module.exports = model("Cpshare", cpshare);