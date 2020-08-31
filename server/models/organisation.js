
const mongoose = require("mongoose");
var organisation= mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    location:{
        type:String,
        required:true,
        trim:true
    },
    info:{
        type:String,
        required:true,
        trim:true
    },
    flag:{
        type:String,
        required:true,
        trim:true
    }
});
module.exports=mongoose.model("organisation",organisation);