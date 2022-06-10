const express =  require("express");
const connect = require("./configs/db")
const app =express();
app.listen("3008",async()=>{
    try {
        await connect();
        console.log("listening on port 3008")
    } catch (error) {
        console.log(error.message)
    }
})