const express = require("express");
const app = express();


// route for all books


app.get("/book", allBooks, (req, res) => {
    res.send("all books ")
})
// middle ware for all books
function allBooks(req, res, next) {
    console.log("Fetching all books");
    next();
}


// route for single book 

app.get("/book/:name", singlebook, (req, res) => {
    res.send({ book_name: req.name })
})

// midleware for single book 

function singlebook(req, res, next) {

    req.name = req.params.name;
    next()

}


app.listen(3008, (req, res) => {
    console.log("listening port number 3008");
})