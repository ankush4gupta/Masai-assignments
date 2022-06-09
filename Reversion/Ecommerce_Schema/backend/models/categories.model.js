const mongoose =  require("mongoose");
const CategoriesSchema =  mongoose.Schema({
    categoryName: { type: String, required: true },
    anscester: [{ type: mongoose.Schema.Types.ObjectId, ref: 'category' }],
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'category' }
})
module.exports = mongoose.model("category",CategoriesSchema)