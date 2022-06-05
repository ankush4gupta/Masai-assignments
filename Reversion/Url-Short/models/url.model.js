const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    urlCode: { type: String, required: true },
    longUrl: { type: String, required: true },
    shortUrl: { type: String, required: true },
    date: { type: Number, required: false },
})

module.exports = mongoose.model('url', urlSchema);