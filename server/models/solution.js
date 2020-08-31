
const mongoose = require("mongoose");
var solution= mongoose.Schema({
    image:{
        type:String,
        required:true,
        trim:true
    },
        
    flag:{
        type:String,
        required:true,
        trim:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
        trim:true
    },
    homework:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"homework",
        required:true,
        trim:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model("solution",solution);
