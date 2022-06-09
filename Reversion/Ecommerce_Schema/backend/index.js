const express = require("express");
const app = express();
const connect = require("./configs/db");
app.use(express.json())
const userController = require("./controllers/user.controller");
const categoriesController =  require("./controllers/categories.controller");
const ProductController =  require("./controllers/paoduct.controller");
const BrandController =  require("./controllers/brand.controller");
const OrderController =  require("./controllers/order.controller")

app.use("/users", userController);
app.use("/category",categoriesController);
app.use("/product",ProductController);
app.use("/brand",BrandController);
app.use("/order",OrderController);
module.exports = app;
app.listen("3008", async () => {
    try {
        await connect();
        console.log("listening port 3008")
    } catch (error) {
        console.log(error.message)
    }
})