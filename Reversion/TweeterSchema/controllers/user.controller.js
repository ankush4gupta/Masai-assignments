const express = require("express");
const route = express.Router();
const User = require("../models/user.model");

route.post("/create",async(req,res)=>{
    try {
        let user =  await User.create(req.body);
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send({"message":error.message})
    }
})
route.get("/username",async(req,res)=>{
    try {
        let user =  await User.findById(req.params.username).lean().exec();
        if(!user){
            res.status(404).send({});
        }
        res.status(200).send(user);
        
    } catch (error) {
        res.status(400).send({ "message": error.message })
    }
})
route.patch("/username", async (req, res) => {
    try {
        let user = await User.findByIdAndUpdate(req.params.username,req.body).lean().exec();
        
        res.status(200).send(user);

    } catch (error) {
        res.status(400).send({ "message": error.message })
    }
})
route.delete("/username", async (req, res) => {
    try {
        let user = await User.findByIdAndDelete(req.params.username).lean().exec();
        
        res.status(200).send(user);

    } catch (error) {
        res.status(400).send({ "message": error.message })
    }
})

module.exports = route