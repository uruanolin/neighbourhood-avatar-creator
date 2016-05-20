var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var avatarSchema = new Schema({
    avatarId: mongoose.Schema.Types.ObjectId,
    district: String,
    avatar: {
        gender: String,
        skinColor: String,
        hair: String,
        glasses: String,
        facialComplement: {
            lips: String,
            beard: String,
        },
        wearTop: String,
        wearBottom: String,
        shoes: String
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
/*
module.exports = mongoose.model('avatar', {
    avatarId: mongoose.Schema.Types.ObjectId,
    district: String,
    avatar: {
        gender: String,
        skinColor: String,
        hair: String,
        glasses: String,
        facialComplement: {
            lips: String,
            beard: String,
        },
        wearTop: String,
        wearBottom: String,
        shoes: String
    }
});
*/
