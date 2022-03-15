const mongoose = require("mongoose");
const Batchschema = mongoose.Schema({
    batchName: { type: String, required: true },


}, {
    timestamps: true,
    versionkey: false
})
module.exports = mongoose.model("batch", Batchschema)