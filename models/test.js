var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Test = new Schema({
    _id: String,
    msg: String
});

module.exports = mongoose.model('Test', Test);
