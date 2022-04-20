const multer = require('multer')
const path = require("path");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../images"))
    },
    filename: function (req, file, cb) {
        const uniquePrefix = Date.now();
        cb(null, uniquePrefix + '-' + file.originalname)
    }
})
function fileFilter(req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted

    // To reject this file pass `false`, like so:
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        // To accept the file pass `true`, like so:
        cb(null, true);
    } else {
        // To reject this file pass `false`, like so:
        cb(new Error("Incorrect mime type"), false);
    }

}
const option = {
    storage,
    fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
}

module.exports = multer(option)