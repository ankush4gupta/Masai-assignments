const express = require("express");
const route = express.Router();
const Section = require("../models/section.model")

// post method -----------------------

route.post("", async (req, res) => {
    try {
        const section = await Section.create(req.body);
        res.status(201).send(section)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
// get method ------------------------
route.get("", async (req, res) => {
    try {
        const section = await Section.find().lean().exec();
        res.status(201).send(section)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = route;