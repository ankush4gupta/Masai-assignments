const express = require("express");
const route = express.Router();
const Evaluation = require("../models/evaluation.model");


route.post("", async (req, res) => {
    try {
        const evaluation = await Evaluation.create(req.body);
        res.status(201).send(evaluation)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

route.get("", async (req, res) => {
    try {
        const evaluation = await Evaluation.find().lean().exec();
        res.status(201).send(evaluation)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
module.exports = route;