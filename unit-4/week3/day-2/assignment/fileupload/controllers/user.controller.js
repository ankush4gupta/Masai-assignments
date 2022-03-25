const express = require("express");
const router = express.Router();
const { uploadSingle } = require("../middlewavers/upload")


// const upload = require("../middlewavers/upload")/
const fs = require('fs');

const User = require("../models/user.models");
// -----------------------------------------------------------------------------------
router.get("", async (req, res) => {
    try {
        const user = await User.find().lean().exec()
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
// -----------------------------------------------------------------------------------
router.post("", uploadSingle("profile_pic", "single"), async (req, res) => {
    try {
        const user = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            profile_pic: req.file.path

        });
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
// ----------------------------------------------------------------------------------------
// router.patch("/:id", upload.single("profile_pic"), async (req, res) => {
//     try {
//         console.log(req.file)
//         let user = await User.findById(req.params.id).lean().exec();

//         fs.unlinkSync(user.profile_pic)
//         let user_details = {
//             first_name: req.body.first_name,
//             last_name: req.body.last_name,
//             profile_pic: req.file.path
//         }
//         user = await User.findByIdAndUpdate(req.params.id, user_details, { new: true })
//         res.send(user)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })



// --------------------------------------------------------------

router.patch("/:userID", uploadSingle("profile_pic", "single"), async (req, res) => {
    try {
        let data;
        let user = await User.findById(req.params.userID)
        if (req.file) {
            let file = user.profile_pic;
            fs.unlinkSync(file.toString());

            data = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                profile_pic: req.file.path
            }
        } else {

            data = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                profile_pic: user.profile_pic
            }
        }

        user = await User.findByIdAndUpdate(req.params.userID, data, { new: true });
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({ mesage: error.message })
    }
})


// ---------------------------------------------------------------------------



router.delete("/:id", uploadSingle("profile_pic", "single"), async (req, res) => {
    try {

        const user = await User.findByIdAndDelete(req.params.id)
        fs.unlink(user.profile_pic.toString(), (err) => {
            if (err) throw new Error(err)
            console.log('path/file.txt was deleted');
        });

        res.status(201).send(user)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})



// -------------------------------------------------------------------------




module.exports = router;