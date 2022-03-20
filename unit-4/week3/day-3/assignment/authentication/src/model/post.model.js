const mongoose = require("mongoose");

const Postschema = mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true, unique: true }

}, {
    versionKeys: false,
    timestamps: true
})
module.exports = mongoose.model("post", Postschema)