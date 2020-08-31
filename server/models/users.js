


// organisation

const mongoose = require("mongoose");

var user= mongoose.Schema({
    contactno:
    {
        type:String,
        required:true,
        trim:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    password:{
        String,
        required:true,
        trim:true,
        minlength:7
    },
    name:
    {
        type:String,
        required:true,
        trim:true
    },
    groupid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"class"
    },
    flag:String
});


module.exports=mongoose.model("users",user);