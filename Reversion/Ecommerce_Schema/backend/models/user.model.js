const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    mobile: { type: Number, required: true },
    address: [{
        type: { type: String, required: false, default: "Local Address" },
        houseNo: { type: String, required: false, default: "NA" },
        street: { type: String, required: true },
        landmark: { type: String, required: false, default: "NA" },
        city: { type: String, required: true },
        pincode: { type: Number, required: true },
        country: { type: String, required: true }

    }]
})
module.exports = mongoose.model("user", UserSchema)