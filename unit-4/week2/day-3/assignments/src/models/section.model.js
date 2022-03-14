const mongoose = require("mongoose");

const Sectionschema = new mongoose.Schema({
    section: { type: String, required: true }
}, {
    timeseries: true,
    versionKey: false
})

module.exports = mongoose.model("section", Sectionschema)