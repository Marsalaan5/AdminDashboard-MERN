const mongoose = require ("mongoose");

const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:String,
    phone:String,
})

module.exports = mongoose.model("Customer",customerSchema);