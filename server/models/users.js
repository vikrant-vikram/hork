
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
        type:String,
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
    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"class",
        required:true,
        trim:true
    },
    organisation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"organisation",
        required:true,
        trim:true
    },
    flag:{
        type:String,
        required:true,
        trim:true
    }
});


module.exports=mongoose.model("users",user);