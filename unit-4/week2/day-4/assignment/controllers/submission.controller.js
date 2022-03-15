const express = require("express");
const { short } = require("webidl-conversions");
const route = express.Router();
const Submission = require("../models/submission.model");


route.post("", async (req, res) => {
    try {
        const submission = await Submission.create(req.body);
        res.status(201).send(submission)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

route.get("", async (req, res) => {
    try {
        const submission = await Submission.find().populate({ path: "student_id" }).lean().exec();
        res.status(201).send(submission)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
//fetch the student with his personal details who scored the highest marks in the evaluation
route.get("/marks", async (req, res) => {
    try {
        const submission = await Submission.findOne({}).sort({ marks: -1 }).populate({ path: "student_id" }).lean().exec();
        res.status(201).send(submission)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
//fetch all students who gave a particular evaluation
route.get("/:evalaution_id", async (req, res) => {
    try {
        const submission = await Submission.find({
            evaluation_id
                : req.params.evalaution_id
        }).populate({ path: "student_id" }).lean().exec();
        res.status(201).send(submission)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = route;