const  mongoose =  require("mongoose");
module.exports = ()=>{
    return mongoose.connect("mongodb+srv://ankush:ankush123@cluster0.nl1od.mongodb.net/?retryWrites=true&w=majority")
}