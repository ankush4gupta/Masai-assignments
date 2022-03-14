const mongoose = require("mongoose");

const Bookschema = new mongoose.Schema({
    bookName: { type: String, required: true },
    section_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "section" },
    author_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "author" }
}, {
    timeseries: true,
    versionKey: false
})

module.exports = mongoose.model("book", Bookschema)