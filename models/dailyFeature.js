const { Schema, model } = require("mongoose");

const dailyFeature = Schema({
    featureID: {type: Number, unique: true, index: true},
    levelID: {type: Number},
    timestamp: {default: new Date().getTime()},
    type: {type: Number, default: 0}
});

module.exports = model("DailyFeature", dailyFeature);