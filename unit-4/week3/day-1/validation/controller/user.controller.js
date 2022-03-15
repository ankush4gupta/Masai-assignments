const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require("../model/user.model");


router.post("",
    body("first_name").trim().not().isEmpty().withMessage("First Name can't be empty"),
    body("last_name").trim().not().isEmpty().withMessage("Last Name can't be empty"),
    body("email").isEmail().withMessage("Enter a valid email").custom(async (value) => {
        const user = await User.findOne({ email: value });
        if (user) {
            throw new Error("Email is already taken");
        }
        return true;
    }),
    body("pin_code").not().isEmpty().withMessage("Pin code can't be emplty").custom((value) => {
        if (value <= 100000 || value >= 999999) {
            throw new Error("Pin code must be 6 digit");

        }
        return true;
    }),
    body("age")
        .not()
        .isEmpty()
        .withMessage("Age cannot be empty")
        .isNumeric()
        .withMessage("Age must be a number between 1 and 100")
        .custom((val) => {
            if (val < 1 || val > 100) {
                throw new Error("Incorrect age provided");
            }
            return true;
        }),
    body("gender").not().isEmpty().withMessage("gender can't be empty").isIn(["Male", "Female", "Others"]).withMessage("please write correct option Male,Female,Others")
    , async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const user = await User.create(req.body);
            res.status(201).send(user)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    })
module.exports = router;