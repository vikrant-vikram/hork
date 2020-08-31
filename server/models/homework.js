
const mongoose = require("mongoose");

var homework= mongoose.Schema({
    heading:{
        type:String,
        required:true,
        trim:true
    },
    details:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:String,
        required:true,
        trim:true
    },
    url:{
        type:String,
        required:true,
        trim:true
    },

    marks:{
        type:String,
        required:true,
        trim:true
    },

    type:{
        type:String,
        required:true,
        trim:true
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subject",
        required:true,
        trim:true
    }
});

module.exports=mongoose.model("homework",homework);




// username:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"users"
// },
// name:String,
// type:String,
// itemname:String,
// quantity:Number,
// orderdate:{
//     type:Date,
//     default:Date.now

// },
// deliverydate:Date,
// price:Number,
// address1:String,
// address2:String,
// address3:String,
// address4:String,
// address5:String,
// contact:Number,
// zip:Number,
// lat:Number,
// lon:Number