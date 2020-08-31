
const mongoose = require("mongoose");
var attendence= mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
        trim:true

    },
    timestamp:{
        type:Date,
        defalt:Date.now
    }
});

module.exports=mongoose.model("attendence",attendence);
