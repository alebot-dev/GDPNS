const { Schema, model } = require("mongoose");

const dailyFeature = Schema({
    levelID: {type: Number},
    timestamp: {type: Number, default: new Date().getTime()},
    type: {type: Number, default: 0}
});

module.exports = model("DailyFeature", dailyFeature);