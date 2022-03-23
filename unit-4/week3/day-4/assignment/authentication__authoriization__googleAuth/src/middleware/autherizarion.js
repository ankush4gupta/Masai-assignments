const Post = require("../model/post.model")
const autherization = (permittedRoles) => {
    return async (req, res, next) => {
        const post = await Post.findById(req.params.id).lean().exec()
        const user = req.userID

        let isPermitted = false;

        let person = permittedRoles.map(role => {
            if (user.roles.includes(role)) {
                if (user._id == post.userId) {
                    isPermitted = true;
                }
            }
        })
        console.log(person)




        console.log(`new ObjectId("${user._id}")`)
        console.log("user", user);
        // console.log("-----------------------------------------------------")
        console.log("post", post)


        if (isPermitted) {
            return next()

        } else {
            console.log(isPermitted)
            return res.send("not allowed")
        }
        // console.log("user", req.userID)
        // console.log("body", req.body)

    }
}

module.exports = autherization;