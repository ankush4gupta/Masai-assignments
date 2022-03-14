const express = require("express");
const route = express.Router();
const Book = require("../models/book.model")

// get  route to find all books-------------
route.get("", async (req, res) => {
    try {

        const book = await Book.find().populate("section_id").populate("author_id").lean().exec();

        res.status(201).send(book)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

// get route to find all books written by particular  author writer -----------------
route.get("/:author_id", async (req, res) => {
    try {

        const book = await Book.find({ author_id: req.params.author_id }).populate("section_id").populate("author_id").lean().exec();

        res.status(201).send(book)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

// get route to  find all book in a particular section  -----------------
route.get("/section/:section_id", async (req, res) => {
    try {

        const book = await Book.find({ section_id: req.params.section_id }).populate("section_id").populate("author_id").lean().exec();
        console.log("book", book)
        res.status(201).send(book)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

// post route for books --------------------
route.post("", async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).send(book)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})


module.exports = route;