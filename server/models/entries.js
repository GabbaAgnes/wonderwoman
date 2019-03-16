const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    
    title: String,
    instructions: String,
    points: Array,
    img: String,
    abletoDelete:{type:Boolean, default:false}
    
   
});

module.exports = mongoose.model('Entry', EntrySchema);