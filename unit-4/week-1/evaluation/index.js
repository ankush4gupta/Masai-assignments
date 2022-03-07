const express = require("express");
const app = express();



//  "/books"  route
app.get("/books", logger, (req, res) => {
    try {
        console.log(req.route)
        res.send({
            route: req.route
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
})


// "/libraries"  route 
app.get("/libraries", logger, checkPermission("librarian"), (req, res) => {
    try {
        if (req.path == "/libraries") {
            console.log("hello")
        }
        res.send(
            {
                route: req.route,
                permission: req.permission
            }
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
})


// "/authors "  route 
app.get("/authors", logger, checkPermission("author"), (req, res) => {
    try {
        res.send(
            {
                route: req.route,
                permission: req.permission
            }
        )
    } catch (error) {
        res.status(500).send(error.message)
    }
})


// middleware for checking permission 
function checkPermission(data) {
    return (req, res, next) => {
        if (data == "librarian" && req.path == "/libraries") {
            req.permission = true;
        }
        else if (data == "author" && req.path == "/authors") {
            req.permission = true;
        }
        else {
            req.permission = false;
        }
        next()
    }
}


// logger middle wavers 
function logger(req, res, next) {
    req.route = req.path;
    next()
}

// connection server 
app.listen(3008, (req, res) => {
    try {
        console.log("listening port 3008")
    } catch (error) {
        console.log(error.message)
    }
})