
const mongoose = require("mongoose");

var oadmin= mongoose.Schema({
    contactno:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        minlenght:10,
        maxlength:10
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlenght:7
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    flag:{
        type:String,
        required:true,
        trim:true
    },

    organisation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"organisation",
        required:true,
        trim:true
    }
});

module.exports=mongoose.model("orgadmin",oadmin);