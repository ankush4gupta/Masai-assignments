const mongoose = require("mongoose");
const submissionschema = mongoose.Schema({

    student_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
    evaluation_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "evalution_s" },
    marks: { type: Number, required: true },
    batch_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "batch" }

}, {
    timestamps: true,
    versionkey: false
})
module.exports = mongoose.model("submission", submissionschema)