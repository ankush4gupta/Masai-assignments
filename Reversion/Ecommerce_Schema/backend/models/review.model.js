const mongoose = require("mongoose");
const ReviewSchema = mongoose.Schema({
    reviewText: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true }
})
module.exports = mongoose.model("review",ReviewSchema)