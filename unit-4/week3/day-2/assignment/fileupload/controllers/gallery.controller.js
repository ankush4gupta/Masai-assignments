const express = require("express");
const router = express.Router();
const Gallery = require("../models/gallery.model")
const { uploadSingle } = require("../middlewavers/upload")




router.post("/gallery", uploadSingle("gallery", "any"), async (req, res) => {
    try {

        const filePaths = req.files.map((file) => {
            return file.path;
        });

        const user = await Gallery.create({
            user_id: req.body.user_id,

            gallery: filePaths

        });
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})