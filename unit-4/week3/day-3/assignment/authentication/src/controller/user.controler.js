const express = require("express");
const app = express();
const router = express.Router()

const User = require("../model/user.model")
router.post("", async (req, res) => {
    try {

        const user = await User.create(req.body);
        res.status(201).send("user")
    } catch (error) {
        res.status(500).send(error.message)
    }
})
module.exports = router