const mongoose = require("mongoose");
const Userschema =  mongoose.Schema(
{
        "username": {type:String},                
        "followers": [{ type: Number }],    
        "following": [{ type: Number }],       
                                  

})


module.exports = mongoose.model("user",Userschema)