const mongoose =  require("mongoose");
const BrandSchema =  mongoose.Schema({
    name : {type :String,required :true},
    image : {type :String,required :false}
})
module.exports = mongoose.model("brand",BrandSchema)