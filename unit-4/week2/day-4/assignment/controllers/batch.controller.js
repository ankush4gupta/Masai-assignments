const express = require("express");
const route = express.Router();
const Batch = require("../models/batch.model");


route.post("", async (req, res) => {
    try {
        const batch = await Batch.create(req.body);
        res.status(201).send(batch)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

route.get("", async (req, res) => {
    try {
        const batch = await Batch.find().lean().exec();
        res.status(201).send(batch)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
module.exports = route;