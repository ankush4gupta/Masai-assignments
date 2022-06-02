const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({

    "postId": { type: Number },
    "imageUrl": { type: String },
    "caption": { type: String },
    "Tweet": [{ type: String }],
    "Likes": { type: Number },
    "comments": { type: String },
    "userId": { type: mongoose.Schema.Types.ObjectId, ref: "user" }


})
module.exports = mongoose.model("post", PostSchema)