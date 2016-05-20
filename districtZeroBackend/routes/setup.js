var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    // create a sample user
    var perico = new User({
        name: 'Perico',
        password: 'password'
    });

    // save the sample user
    perico.save(function(err) {
        if (err) throw err;

        console.log('User saved successfully');
        res.json({
            success: true
        });
    });
});

module.exports = router;
