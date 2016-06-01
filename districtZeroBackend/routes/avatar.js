var express = require('express');
var router = express.Router();
var Avatar = require('../models/avatar.js');
var jwt = require('jsonwebtoken');
var config = require('../config');
var fs = require('fs');

var formidable = require('formidable');
var FileReader = require('filereader');

router.post('/', function(req, res, next) {

    var newAvatar = Avatar({

        //avatarId: mongoose.Schema.Types.ObjectId,
        name: req.body.data.name,
        district: req.body.data.district,
        gender: req.body.data.gender,
        avatar: req.body.data.avatarConf,
        answer: req.body.data.answer
    });

    newAvatar.save(function(err) {
        if (err) throw err;

        console.log('Avatar created!');
    });

    res.send('Got a POST request');
});

router.post('/finalScreenshot', function(req, res, next) {

    //console.log(req.headers);
    //console.log(req.body);

    var d = new Date();
    var n = d.getTime();

    var string = req.body.data.replace('data:image/octet-stream;base64,', '');
    var buffer = new Buffer(string, 'base64')
    fs.writeFileSync('/usr/share/nginx/html/static/' + n + '.jpg', buffer);

    // return file's server path
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ imagename: n }));
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
