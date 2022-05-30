const mongoose = require("mongoose");

const Schema=mongoose.Schema;

const editorSchema=new Schema({
    
editor:{
    type:String, 
    required:[true, "ئىسىم قوشۇڭ"],
    unique:true
},

email:{
    type:String,
    required:[true, " ئېمىل قوشۇڭ"],
    unique:true

},
password:{
    type:String,
    required:[true, " مەخپى نومۇرىنى كىرگۈزۈڭ "],
},

validation:{
    type:String,
    required: true
},

},
{
    timestamps:true
})

module.exports = mongoose.model("Editor", editorSchema )

