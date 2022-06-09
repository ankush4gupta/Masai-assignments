const express =  require("express");
const route =  express.Router();
const Categories =  require("../models/categories.model");
// finding all categories
route.get("/",async(req,res)=>{
    try {
        let categories =  await Categories.find().lean().exec();
        res.status(200).send(categories)
        
    } catch (error) {
        res.status(500).send({"message" : error.message})
    }
})
// finding one category
route.get("/:id", async (req, res) => {
    try {
        let category = await Categories.findById(req.params.id).lean().exec();
        if (!category){

            res.status(404).send({})
        }
        res.status(200).send(category)

    } catch (error) {
        res.status(500).send({ "message": error.message })
    }
})
// creating categories
route.post("/create", async (req, res) => {
    try {
        let category = await Categories.create(req.body);
        res.status(201).send(category)
    } catch (error) {
        res.status(500).send({ "message": error.message })
    }
})
// find by id and update
route.patch('/:id/edit', async (req, res) => {
    try {
        let category = await Categories.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(201).send(category);
    } catch (error) {
        return res.status(500).send(error);
    }
}) 


module.exports =  route