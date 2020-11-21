const { Schema, model } = require("mongoose");

const suggest = Schema({
    suggestID: {type: Number, unique: true, index: true},
    suggestedBy: {type: Number, index: true},
    levelID: {type: Number},
    suggestDifficulty: {type: Number},                   // refer to cvolton's sql for difficulty IDs
    suggestStars: {type: Boolean},
    suggestFeatured: {type: Boolean},
    suggestAuto: {type: Boolean},
    suggestDemon: {type: Boolean},
    timestamp: {default: new Date().getTime()}
});

module.exports = model("Suggest", suggest);