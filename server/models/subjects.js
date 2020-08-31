// group store the information about the group such as 
// group 10 ,12 Bio ,12 Attr etc belong to following organisitom
// Name:Store the name of the organisitom such as 10th 11th 12th
// organisitom: frfom which organisation this group belongs to
// created:Which organisatiomadmin created the group 






const mongoose = require("mongoose");
var subject= mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    class:{
        type:String,
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

module.exports=mongoose.model("subjects",subject);