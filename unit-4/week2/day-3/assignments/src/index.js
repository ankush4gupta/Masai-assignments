const express = require("express");
const app = express()
const connect = require("./configs/db");

app.use(express.json())
const Sectioncontroller = require("./controllers/section.controller");
const Authorcontroller = require("./controllers/author.controller");
const Bookcontroller = require("./controllers/book.controller");
const Checkoutcontroller = require("./controllers/checkout.controller")

// method + route for section api  ---------------------------
app.use("/section", Sectioncontroller)

// method + route for author api ---------------------------
app.use("/author", Authorcontroller)

// method + route for book api ---------------------------
app.use("/book", Bookcontroller)


// method + route for book api ---------------------------
app.use("/checkout", Checkoutcontroller)



//  server ---------------------------------------------------
app.listen(3008, async () => {
    try {

        await connect();
        console.log("listening port 3008")
    } catch (error) {
        console.log(error)
    }
})