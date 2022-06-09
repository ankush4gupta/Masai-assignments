const express =  require("express");
const route =  express.Router();
const Product =  require("../models/product.model");
// Finding all Products
route.get("/",async(req,res)=>{
    try {
        let products =  await Product.find().lean().exec();
        res.status(200).send(products);
    } catch (error) {
        return res.status(500).send(error);
    }
})
// Finding product by productId
route.get("/:id", async (req, res) => {
    try {
        let product = await Product.findById(req.params.id).lean().exec();
        if(!product){
            res.status(404).send({})
        }
        res.status(200).send(product);
    } catch (error) {
        return res.status(500).send(error);
    }
})
// Creating new products 
route.post("/create", async (req, res) => {
    try {
        let product = await Product.create(req.body);
        res.status(201).send(product);
    } catch (error) {
        return res.status(500).send(error);
    }
})
// Updating single product
route.patch("/:id/edit", async (req, res) => {
    try {
        let product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).send(product);
    } catch (error) {
        return res.status(500).send(error);
    }
})
// Deleting single product
route.delete("/:id/edit", async (req, res) => {
    try {
        let product = await Product.findByIdAndDelete(req.params.id);
        res.status(201).send(product);
    } catch (error) {
        return res.status(500).send(error);
    }
})

module.exports = route