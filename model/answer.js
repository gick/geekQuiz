var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const answerSchema=Schema({
    question:Object,
    score:Object,
    date:Date,
})

module.exports = mongoose.model('answer', answerSchema);