const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({

    institutionName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isInstitution: {
        type: String,
        default: "NO",
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model("Institution", AdminSchema);