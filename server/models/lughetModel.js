const mongoose = require("mongoose");

const Schema=mongoose.Schema;

const lughetSchema=new Schema({
    
deutsch:{
    type:String, 
    required:true,
    unique:true
},

artikel:{
    type:String
},
verben:{
    type:String
},
uyghur:{
    type:String,
    required: true
},
satze:{
    type:String
},
uysatze:{
    type:String
},

})

module.exports = mongoose.model("Lughet", lughetSchema )

