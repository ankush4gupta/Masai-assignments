const express = require("express");
const app = express();
app.use(express.json())
const Usercontroller = require("./controller/user.controller");
app.use("/user", Usercontroller)
module.exports = app;