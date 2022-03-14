const express = require("express");
const route = express.Router();
const Author = require("../models/author.model")

// post method ------------------------------
route.post("", async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).send(author)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

// get  method ------------------------------
route.get("", async (req, res) => {
    try {
        const author = await Author.find().lean().exec();
        res.status(201).send(author)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})


module.exports = route;