const mongoose = require("mongoose");

const Authorschema = new mongoose.Schema({
    author: { type: String, required: true }


}, {
    timeseries: true,
    versionKey: false
})

module.exports = mongoose.model("author", Authorschema)