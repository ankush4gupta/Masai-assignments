// const path = require("path");
const express = require("express");

const transporter = require("../configs/mail");

const User = require("../models/user.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const doc = req.query.documents || 2;
    const skip = (page - 1) * doc;

    const user = await User.find().skip(skip).limit(doc).lean().exec();

    const total_pages = Math.ceil((await User.find().count()) / skip);

    return res.status(200).send({ user, total_pages });

  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);

    transporter.sendMail({
      from: '"Amazon admin" <admin@amazon.com>',
      to: user.email,
      subject: "Welcome to ABC system " + user.first_name + " " + user.last_name,
      text: "Hii " + user.first_name + " Please confirm your email address",
    });

    transporter.sendMail({
      to: ["Ankush@a.com", "Sourabh@b.com", "Ayush@c.com", "Reena@d.com", "someome@a.com"],
      from: '"Amazon admin" <admin@amazon.com>',
      subject: user.first_name + " " + user.last_name + " " + "has registered with us",
      text: "Please welcome" + " " + user.first_name + " " + user.last_name,
    });

    return res.status(201).send({ message: "user register successfully" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;