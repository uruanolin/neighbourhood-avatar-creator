var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var jwt = require('jsonwebtoken');

var config = require('../config');

/* GET home page. */
router.post('/', function(req, res, next) {

    // find the user
    User.findOne({
        name: req.body.username
    }, function(err, user) {

        if (err) throw err;

        if (!user) {
            res.json({
                success: false,
                message: 'Authentication failed. User not found.'
            });
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.json({
                    success: false,
                    message: 'Authentication failed. Wrong password.'
                });
            } else {
                console.log(config);
console.log(typeof config.authenticationSecret);
                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, config.authenticationSecret, {
                    expiresIn: '10m' // expires in 24 hours
                });

                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }

        }

    });

});

module.exports = router;
