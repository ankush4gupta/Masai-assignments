const express = require("express");
const app = express();
app.use(express.json())
const usercontroller = require("./controllers/user.controller");
app.use("/user", usercontroller)



const connect = require("./configs/db")

app.listen(3018, async () => {
    try {
        await connect();
        console.log("listening port 3018")
    } catch (error) {
        console.error(error.message)
    }
})

