const mongoose = require("mongoose");
const Userschema = mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    pin_code: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
})

module.exports = mongoose.model("user", Userschema)