
const mongoose = require("mongoose");

var classes= mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    organisation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"organisation",
        required:true,
        trim:true
    },
    created:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"orgadmin",
        required:true,
        trim:true
    },
    flag:{
        type:String,
        required:true,
        trim:true
    }
});

module.exports=mongoose.model("class",classes);