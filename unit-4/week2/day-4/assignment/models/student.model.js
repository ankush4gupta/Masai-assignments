const mongoose = require("mongoose");
const Studentschema = mongoose.Schema({
    rollId: { type: Number, required: true, unique: true },
    batch_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "batch" },
    userid: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" }


}, {
    timestamps: true,
    versionkey: false
})
module.exports = mongoose.model("student", Studentschema)