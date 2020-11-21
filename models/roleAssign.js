const { Schema, model } = require("mongoose");

const roleAssign = Schema({
    assignID: {type: Number, unique: true, index: true},
    roleID: {type: Number},
    accountID: {type: Number}
});

module.exports = model("RoleAssign", roleAssign);