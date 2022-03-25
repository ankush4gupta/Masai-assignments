const mongoose = require("mongoose");
module.exports = () => {
    mongoose.connect("mongodb+srv://ankush:ankush_123@cluster0.agxkw.mongodb.net/fileupload?authSource=admin&replicaSet=atlas-w63zcs-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true")
}