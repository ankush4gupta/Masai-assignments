const mongoose =  require("mongoose");
const BrandSchema =  mongoose.Schema({
    name : {type :String,required :true},
    image : {type :String,required :false},
    productId :[{type : mongoose.Schema.Types.ObjectId,required:true,ref:"product"}]
})
module.exports = mongoose.model("brand",BrandSchema)