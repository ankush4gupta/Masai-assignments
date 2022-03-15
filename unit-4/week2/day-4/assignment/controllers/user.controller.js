const express = require("express");
const route = express.Router();
const User = require("../models/user.model");


route.post("", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

route.get("", async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
module.exports = route;