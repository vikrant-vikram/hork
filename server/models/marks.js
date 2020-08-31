
const mongoose = require("mongoose");
var marks= mongoose.Schema({
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
        defalt:Date.now

    },
    marks:{
        type:String,
        defalt:"0",
        required:true,
        trim:true
    },
    heading:{
        type:String,
        required:true,
        trim:true
    },
    solution:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"solution",
        required:true,
        trim:true
    }
});

module.exports=mongoose.model("marks",marks);
