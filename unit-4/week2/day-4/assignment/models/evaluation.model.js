const mongoose = require("mongoose");
const evaluationschema = mongoose.Schema({

    instructor_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
    date_of_ev: { type: Date, required: true },
    batch_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "batch" }

}, {
    timestamps: true,
    versionkey: false
})
module.exports = mongoose.model("evalution_s", evaluationschema)