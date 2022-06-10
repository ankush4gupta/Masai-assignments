const express = require("express");
const app = express();
const webscraping =  require("./example")

app.get("/data",async(req,res)=>{
    try {
        let result = await webscraping();
        console.log(result,"result")
        res.send(result)
        
    } catch (error) {
        res.send(error.message)
    }
})
app.listen("3008",()=>{
    try {
        console.log("listening on port 3008")
    } catch (error) {
        console.log(error)
    }
})