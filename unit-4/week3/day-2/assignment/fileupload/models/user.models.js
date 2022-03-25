
const mongoose = require("mongoose");
const Userschema = mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    profile_pic: { type: String, required: false },

})
module.exports = mongoose.model("profile", Userschema)