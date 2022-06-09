const express = require("express");
const app = express();
const connect = require("./configs/db");
app.use(express.json())
const userController = require("./controllers/user.controller");
const categoriesController =  require("./controllers/categories.controller");

app.use("/users", userController);
app.use("/category",categoriesController)
module.exports = app;
app.listen("3008", async () => {
    try {
        await connect();
        console.log("listening port 3008")
    } catch (error) {
        console.log(error.message)
    }
})