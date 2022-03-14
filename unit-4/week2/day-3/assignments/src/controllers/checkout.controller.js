const express = require("express");
const route = express.Router();
const Checkout = require("../models/checkout.model")

// post method -----------------------

route.post("", async (req, res) => {
    try {
        const checkout = await Checkout.create(req.body);
        res.status(201).send(checkout)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
// get method ------------------------
route.get("", async (req, res) => {
    try {
        const checkout = await Checkout.find().populate({ path: "book_id" }).lean().exec();
        res.status(201).send(checkout)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

//  find books in a section that are not checked out

route.get("/section/:id", async (req, res) => {
    try {
        const checkout = await Checkout.find({
            $and: [{ section_id: req.params.id }, {
                $or: [{
                    $and: [{ checkedOutTime: null }, {
                        checkedInTime
                            : null
                    }]
                }, {
                    $and: [{ checkedOutTime: { $not: { $in: [null] } } }, { checkedInTime: { $not: { $in: [null] } } }]
                }]
            }]
        }).populate({ path: "book_id" }).lean().exec();
        res.status(201).send(checkout)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})


// find books that are checked out
route.get("/out", async (req, res) => {
    try {
        const checkout = await Checkout.find({
            $and: [{ checkedInTime: null }, { checkedOutTime: { $not: { $in: [null] } } }]


        }).populate({ path: "book_id" }).lean().exec();
        res.status(201).send(checkout)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

module.exports = route;