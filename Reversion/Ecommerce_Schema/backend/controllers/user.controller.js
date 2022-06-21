const express = require("express");
const route = express.Router();
const User = require("../models/user.model");

//  finding all user
route.get("/", async (req, res) => {
    try {
        let user = await User.find().lean().exec();

        res.status(200).send(user)

    } catch (error) {
        res.status(500).send({ "meassge": error.meassge })
    }
})
//  creating user
route.post("/create", async (req, res) => {
    try {
        // let user = await User.findOne({ email: { $regex: /m./, $options: req.email } })
        // console.log(user,"user")
        // if(user){
        //     console.log(user.email)
        //     res.send("already exist")
        // }
        // console.log(user)

       let user = await User.create(req.body);
        res.status(200).send(user)

    } catch (error) {
        res.status(500).send({ "meassge": error.meassge })
    }
})
//  finding single user
route.get("/:id", async (req, res) => {
    try {
        let user = await User.findById(req.params.id).lean().exec();
        if (!user) {

            res.status(404).send({})
        }
        res.status(200).send(user)

    } catch (error) {
        res.status(500).send({ "meassge": error.meassge })
    }
})
//  edition single user 
route.patch("/:id/edit", async (req, res) => {
    try {
        console.log(req.params.id, req.body)
        let user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        })
            .lean()
            .exec();

        res.status(200).send(user)



    } catch (error) {
        res.status(500).send({ "meassge": error.meassge })
    }
})
// find single user address
route.get("/:id/address", async (req, res) => {
    try {
        let user = await User.findById(req.params.id).lean().exec();
        if (user) {

            res.status(200).send(user.address)
        }
        res.status(404).send({})

    } catch (error) {
        res.status(500).send({ "meassge": error.meassge })
    }
})
//  adding more address in single user doc
route.patch("/:id/addressess/create", async (req, res) => {
    try {
        let user = await User.updateOne(
            { _id: req.params.id },
            { $push: { address: req.body } }
        );

        return res.status(200).send(user);
    } catch (error) {
        console.log("error:", error);
        res.status(500).send({ data: [], message: "error", error: error.message });
    }
});

route.patch("/:id/addresses/:idx/edit", async (req, res) => {
    try {
        let adress = address._id
        const user = await User.findone({ _id: req.params.id, adress: req.paramas.idx });

        // console.log("id: ", req.params.id, "idx: ", req.paramas.idx);
        return res.status(200).send(user);
    } catch (error) {
        console.log("error:", error);
        res.status(500).send({ data: [], message: "error", error: error.message });
    }
});

module.exports = route