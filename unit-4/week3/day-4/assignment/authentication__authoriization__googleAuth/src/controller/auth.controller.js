// const express = require("express");
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require("../model/user.model");

require("dotenv").config()

const register = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.send({ message: "User is already exist " })
        }
        // const filepaths = req.files.map((file) => {
        //     return file.path;
        // })
        user = await User.create(
            req.body

        );
        const token = jwt.sign({ user }, process.env.JWT_SECRETKEY)
        console.log(token)
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        if (!user) return res.send({ message: "Email or password not matched " })

        //if email exists, check password;
        const match = user.checkPassword(req.body.password)

        // if it doesn't match
        if (!match) {
            return res.status(400).send({ message: "Wrong Email or Password" })
        }


        const token = jwt.sign({ user }, process.env.JWT_SECRETKEY)
        res.send({ user, token })
    } catch (error) {
        res.status(500).send({ "Error-message": error.message })
    }
}

module.exports = { register, login }