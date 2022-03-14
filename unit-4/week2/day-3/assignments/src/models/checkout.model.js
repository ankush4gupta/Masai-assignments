const mongoose = require("mongoose");

const Checkoutschema = new mongoose.Schema({
    book_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "book" },
    checkedOutTime: { type: Date, required: false, default: null },
    checkedInTime: { type: Date, required: false, default: null }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("checkout", Checkoutschema)