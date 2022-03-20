const express = require("express");

const router = express.Router();
const authenicate = require("../middleware/autherization")

const Post = require("../model/post.model")
router.post("", authenicate, async (req, res) => {
    try {
        req.body.user_id = req.userID;
        const post = await Post.create(req.body);

        res.status(201).send(post)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.post("", async (req, res) => {
    try {
        req.body.user_id = req.userID;
        const post = await Post.create(req.body);

        res.status(201).send(post)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.patch("/:id", authenicate, async (req, res) => {
    try {
        req.body.user_id = req.userID;
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();

        res.status(201).send(post)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.delete("/:id", authenicate, async (req, res) => {
    try {
        req.body.user_id = req.userID;
        const post = await Post.findByIdAndDelete(req.params.id).lean().exec();

        res.status(201).send(post)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router