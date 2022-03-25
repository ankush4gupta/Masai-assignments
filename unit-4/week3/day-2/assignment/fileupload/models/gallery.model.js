
const mongoose = require("mongoose");
const GallerySchema = mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },

    gallery: [{ type: String, required: true }],

})
module.exports = mongoose.model("gallery", GallerySchema)