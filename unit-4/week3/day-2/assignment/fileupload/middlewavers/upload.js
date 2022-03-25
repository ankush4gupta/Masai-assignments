const multer = require('multer')
const path = require("path");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, path.join(__dirname, "../images"))
    },
    filename: function (req, file, cb) {
        const uniquePrefix = Date.now() + Math.random().toString()
        cb(null, uniquePrefix + "-" + file.originalname)
    }
})

function fileFilter(req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
    // To accept the file pass `true`, like so:
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
        cb(null, true)
    } else {
        // To reject this file pass `false`, like so:
        cb(null, false)
    }


}

const upload = multer({
    storage, fileFilter, limit: {
        fileSize: 1024 * 1024 * 3
    }
})
// module.exports = { upload }

const uploadSingle = (filekey) => {

    return function (req, res, next) {
        const uploaditem = upload.single(filekey)
        uploaditem(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).send(err.message);
            } else if (err) {
                return res.status(500).send(err.message);
                // An unknown error occurred when uploading.
            }
            return next()
            // Everything went fine.
        })

    }
}

const uploadmulti = (filekey) => {
    return function (req, res, next) {
        const uploaditem = upload.any(filekey);
        uploaditem(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).send(err.message);
            } else if (err) {
                return res.status(500).send(err.message);
            }
            next()
            // Everything went fine.
        })

    }
}
module.exports = { upload, uploadmulti, uploadSingle }