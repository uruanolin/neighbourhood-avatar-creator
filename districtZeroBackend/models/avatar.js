var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var avatarSchema = new Schema({
    avatarId: mongoose.Schema.Types.ObjectId,
    name: String,
    district: String,
    gender: String,
    avatar: {
        skinColor: String,
        hair: String,
        glasses: String,
        moustacheOrLips: String,
        wearTop: String,
        wearBottom: String,
        shoes: String
    },
    answer: {
        correctAnswer: String,
        realAnswer: String
    }
});

/*
avatarSchema.methods.someMethod = function() {
    // add some stuff to the users name
    this.name = this.name + '-dude';

    return this.name;
};
*/

var Avatar = mongoose.model('Avatar', avatarSchema);
module.exports = Avatar;
