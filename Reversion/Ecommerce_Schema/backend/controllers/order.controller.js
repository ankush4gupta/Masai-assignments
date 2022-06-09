const express = require('express');
const Order = require('../models/brand.model');
const route = express.Router();
// finding all orderlist for all users
route.get('/', async (req, res) => {
    try {
        let order = await Order.find().lean().exec();
        res.status(200).send(order)
    } catch (error) {
         res.status(500).send(error)
    }
})
// creating order

route.post('/create', async (req, res) => {
    try {
        let order = await Order.create(req.body);
        if(!order){
            res.status(404).send({})
        }
         res.status(201).send(order);
    } catch (error) {
         res.status(500).send(error)
    }
})
// finding order by orderid
route.get('/:id', async (req, res) => {
    try {
        let order = await Order.findById(req.params.id).lean().exec();
         res.status(200).send(order);
    } catch (error) {
         res.status(500).send(error);
    }
})
// updating order by orderid

route.patch('/:id/edit', async (req, res) => {
    try {
        let order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
         res.status(201).send(order);
    } catch (error) {
         res.status(500).send(error);
    }
})

route.patch('/:id/add/:product', async (req, res) => {
    try {
        let order = await Order.findByIdAndUpdate(req.params.id, { $push: { productIds: req.params.product } }, { new: true })
         res.status(201).send(order);
    } catch (error) {
         res.status(500).send(error);
    }
})
module.exports = route;