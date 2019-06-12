var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const sessionSchema=Schema({
    question:Array,
    run:Array,
    sessionId:String,
})

module.exports = mongoose.model('sessionSchema', sessionSchema);