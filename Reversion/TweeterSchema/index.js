const express = require("express");
const app = express();
const connect = require("./configs/db")
app.use(express.json())
const usercontroller = require("./controllers/user.controller");
const PostController = require("./controllers/post.controller")
app.use('/twitter',usercontroller);
app.use("/post",PostController)

app.listen("3008",async()=>{
    try {
        await connect();
        console.log("listening port on 3008");
    } catch (error) {
        console.error(error.message)
    }
})