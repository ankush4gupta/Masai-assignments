const mongoose = require("mongoose");
const Userschema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    type: { type: String, required: true, default: "student" },

}, {
    timestamps: true,
    versionkey: false
})
module.exports = mongoose.model("user", Userschema)