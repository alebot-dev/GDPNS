const { Schema, model } = require("mongoose");

const report = Schema({
    reportID: {type: Number, unique: true, index: true},
    levelID: {type: Number}
});

module.exports = model("Report", report);