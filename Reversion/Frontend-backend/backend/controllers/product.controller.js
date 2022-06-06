
const express = require("express");

const router = express.Router();
const Product = require("../models/product.model");



// All query route------------------------------->

router.get("/", async (req, res) => {
    const page = req.query.page || 1;
    const item = req.query.items || 10;
    let sort = req.query.sort || "sort_acc" 


    try {

       
        let product;
        let filter = {};
        
        if (req.query.color) {
            const color = req.query.color.split(",")
            filter.color = { $in: color }
        }
        if (req.query.name) {
            const name = req.query.name.split(",")
            filter.name = { $in: name }
        } if (req.query.type) {
            const type = req.query.type.split(",")
            filter.type = { $in: type }
        }
        if (req.query.discount) {
            filter.discount = { $gte: req.query.discount }
        }
       if(sort=="sort_acc"){
           sort = {"discount_price" : 1}
       }else{
           sort = { "discount_price": -1 }
       }
        console.log(filter)

        product = await Product.find(filter).skip((page - 1) * item).sort(sort).limit(item).lean().exec();
        // let pagecount = await Product.countDocuments()
        let pagecount = Math.ceil(product.length / item)
        res.status(201).send({ product, pagecount })

    } catch (error) {
        res.status(500).send({ message: error.message })
        console.log("nhi")
    }
})
//route  for id controller------------------------------->
router.get("/:id", async (req, res) => {
    try {
        const user = await Product.findById(req.params.id).lean().exec(); //findById will Read document By MONGO-ID & .param() =mongoid
        return res.send(user);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
});

// router.post("", async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(201).send(product)
//     } catch (error) {
//         res.status(500).send({ message: error.message })
//     }
// })

module.exports = router;