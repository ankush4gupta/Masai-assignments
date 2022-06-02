const express = require("express");
const route = express.Router();
const Post = require("../models/post.model");

route.post("/create", async (req, res) => {
    try {
        let post = await Post.create(req.body);
        res.status(201).send(post)
    } catch (error) {
        res.status(400).send({ "message": error.message })
    }
})
route.get("/username", async (req, res) => {
    try {
        let post = await Post.findById(req.params.username).lean().exec();
        if (!post) {
            res.status(404).send({});
        }
        res.status(200).send(post);

    } catch (error) {
        res.status(400).send({ "message": error.message })
    }
})
route.patch("/username", async (req, res) => {
    try {
        let post = await Post.findByIdAndUpdate(req.params.username, req.body).lean().exec();

        res.status(200).send(post);

    } catch (error) {
        res.status(400).send({ "message": error.message })
    }
})
route.delete("/username", async (req, res) => {
    try {
        let post = await Post.findByIdAndDelete(req.params.username).lean().exec();

        res.status(200).send(post);

    } catch (error) {
        res.status(400).send({ "message": error.message })
    }
})

module.exports = route