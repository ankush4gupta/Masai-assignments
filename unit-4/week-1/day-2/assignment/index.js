const express = require("express");
const app = express();
app.get("/home", (req, res) => {
    try {
        res.send("hello")
    } catch (error) {
        res.send(error.message)
    }
})

app.get("/books", (req, res) => {
    try {
        res.send({ herry_potor: "magic book", wings_of_fire: "biography of apj kalam", herry_potor: "magic book", wings_of_fire: "biography of apj kalam", })
    } catch (error) {
        res.send(error.message)
    }
})
app.listen("3008", () => {
    console.log("listening port 3008")
})