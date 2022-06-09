const express = require('express');
const Reviews = require('../models/review.model')
const route = express.Router();
// all reviews
route.get('/', async (req, res) => {
    try {
        let reviews = await Reviews.find().lean().exec();
         res.status(200).send(reviews);
    } catch (error) {
         res.status(500).send(error)
    }
})
//  review by id
route.get('/:id', async (req, res) => {
    try {
        let review = await Reviews.findById(req.params.id).lean().exec();
         res.status(200).send(review);
    } catch (error) {
         res.status(500).send(error);
    }
})
// Create review
route.post('/create', async (req, res) => {
    try {
        let review = await Reviews.create(req.body);
        if(!review){
            res.status(404).send({})
        }
         res.status(201).send(review);
    } catch (error) {
         res.status(500).send(error);
    }
})

// update review
route.patch('/:id/edit', async (req, res) => {
    try {
        let review = await Reviews.findByIdAndUpdate(req.params.id, req.body, { new: true });
         res.status(201).send(review);
    } catch (error) {
         res.status(500).send(error);
    }
})
//  find review on particular products
route.get('/:id/product', async (req, res) => {
    try {
        let reviews = await Reviews.findById({ productId: req.params.id }).lean().exec();
         res.status(200).send(reviews);
    } catch (error) {
         res.status(500).send(error);
    }
})
// find all review of particular userId
route.get('/:id/userId', async (req, res) => {
    try {
        let reviews = await Reviews.findById({ userId: req.params.id }).lean().exec();
        res.status(200).send(reviews);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = route;