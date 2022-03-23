const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    Image: { type: String },
    roles: [{ type: String, required: true }]
}, {
    versionKeys: false,
    timestamps: true
})
UserSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
    var hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next()
})

UserSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("user", UserSchema)