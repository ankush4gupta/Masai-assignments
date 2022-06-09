const mongoose =  require("mongoose");
const ProductSchema =  mongoose.Schema({
    productName: { type: String, required: true },
    image: [{ type: String, required: true }],
    price: { type: Number, required: true },
    description: { type: String, required: true },
    categoriesId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true }]
})
module.exports = mongoose.model("product",ProductSchema)