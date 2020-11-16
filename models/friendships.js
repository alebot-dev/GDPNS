const { Schema, model } = require("mongoose");

const friendship = Schema({
    FriendshipID: {type: Number, unique: true, index: true},
    person1: {type: Number},
    person2: {type: Number},
    new1: {type: Boolean, default: true},
    new2: {type: Boolean, default: true}
});

module.exports = model("Friendship", friendship);