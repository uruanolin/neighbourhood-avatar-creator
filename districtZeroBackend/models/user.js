var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    password: String
});

var User = mongoose.model('User', userSchema);
module.exports = User;
