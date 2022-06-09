const mongoose =  require("mongoose");
const OrderSchema =  mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    productId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true }]
})
module.exports = mongoose.model("order", OrderSchema)