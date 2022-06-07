const mongoose = require("mongoose");

const Schema=mongoose.Schema;

const lughetSchema=new Schema({

    // editor:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref:"Editor"
    // },
    
deutsch:{
    type:String, 
    required:true,
    unique:[true, "بۇ سۆز ئاللىقاچان قوشۇلغان"]
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

