var express = require('express');
var router = express.Router();
var Avatar = require('../models/avatar.js');
var jwt = require('jsonwebtoken');
var config = require('../config');

router.post('/', function(req, res, next) {

    var newAvatar = Avatar({

        //avatarId: mongoose.Schema.Types.ObjectId,
        district: 'pakito',
        avatar: {
            gender: 'pakito',
            skinColor: 'pakito',
            hair: 'pakito',
            glasses: 'pakito',
            facialComplement: {
                lips: 'pakito',
                beard: 'pakito',
            },
            wearTop: 'pakito',
            wearBottom: 'pakito',
            shoes: 'pakito'
        }
    });

    newAvatar.save(function(err) {
        if (err) throw err;

        console.log('Avatar created!');
    });

    res.send('Got a POST request');
});

// route middleware to verify a token
router.use(function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, config.authenticationSecret, function(err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});

/* GET district-avatar listing. */
router.get('/', function(req, res, next) {

    Avatar.find({}, function(err, avatars) {
        res.json(avatars);
    });
    //res.send('respond with district-avatar list');
});



module.exports = router;
