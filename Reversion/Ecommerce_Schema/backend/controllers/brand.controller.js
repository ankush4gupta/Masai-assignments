const express =  require("express");
const Brand =  require("../models/brand.model");
const route =  express.Router();
// Finding all Brands
route.get("/", async (req, res) => {
    try {
        let brands = await Brand.find().lean().exec();
        res.status(200).send(brands);
    } catch (error) {
        return res.status(500).send(error);
    }
})
// Finding product by BrandId
route.get("/:id", async (req, res) => {
    try {
        let brand = await Brand.findById(req.params.id).lean().exec();
        if (!brand) {
            res.status(404).send({})
        }
        res.status(200).send(brand);
    } catch (error) {
        return res.status(500).send(error);
    }
})
// Creating new brand 
route.post("/create", async (req, res) => {
    try {
        let brand = await Brand.create(req.body);
        res.status(201).send(brand);
    } catch (error) {
        return res.status(500).send(error);
    }
})
// Updating single brand
route.patch("/:id/edit", async (req, res) => {
    try {
        let brand = await brand.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).send(brand);
    } catch (error) {
        return res.status(500).send(error);
    }
})
// Deleting single brand
route.delete("/:id/edit", async (req, res) => {
    try {
        let brand = await Brand.findByIdAndDelete(req.params.id);
        res.status(201).send(brand);
    } catch (error) {
        return res.status(500).send(error);
    }
})
module.exports = route;
