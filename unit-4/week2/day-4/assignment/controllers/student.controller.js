const express = require("express");
const route = express.Router();
const Student = require("../models/student.model");


route.post("", async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).send(student)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

route.get("", async (req, res) => {
    try {
        const student = await Student.find().lean().exec();
        res.status(201).send(student)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
module.exports = route;