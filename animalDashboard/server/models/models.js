
const mongoose = require("mongoose")

var AnimalSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    color: {type: String, required: true, minlength: 2},
    types: {type: String, required: true, minlength: 2},
    description: {type: String, required: true, minlength: 2},  
    date_added: { "type": Date, "default": Date.now }
   })

   mongoose.model('Animal', AnimalSchema); 
   