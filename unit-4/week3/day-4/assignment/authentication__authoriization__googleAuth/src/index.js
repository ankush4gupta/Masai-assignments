const express = require("express");
const passport = require("./middleware/googleOauth")
const app = express();
app.use(express.json())
const { register, login } = require("./controller/auth.controller")
const { body } = require('express-validator');
const postcontroller = require("./controller/post.controller")
const upload = require("./middleware/uploads")

const usercontroller = require("./controller/user.controler");
app.use("/user", usercontroller)
app.use("/post", postcontroller)

app.post("/register", upload.single("Image"), body("name").trim().not().isEmpty().bail(),

    body("password").not().isEmpty().withMessage("Password can't be null").isStrongPassword().withMessage("password should include uppercase lower case letters, numbers and symbol and should min length 8"), register);
app.post("/login", login)



app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login', session: false }),

    function (req, res) {
        // const token = generateToken(req.user)
        return res.status(200).send({ user: req.user })
    }
)
module.exports = app;