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
    var buffer = new Buffer(string, 'base64');
    fs.writeFileSync('/usr/share/nginx/html/static/' + n + '.jpg', buffer);

    // return file's server path
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        imagename: n
    }));
});

// route middleware to verify a token
router.use(function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
console.log(req.body.data);
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

    var result = {
        'Ciutat Vella': null,
        'Eixample': null,
        'Sants-Montjuïc': null,
        'Les Corts': null,
        'Sarrià-Sant Gervasi': null,
        'Gràcia': null,
        'Horta-Guinardó': null,
        'Nou Barris': null,
        'Sant Andreu': null,
        'Sant Martí': null
    };

    for (var district in result) {
        if (result.hasOwnProperty(district)) {
            result[district] = {
                count: {
                    homes: 0,
                    dones: 0
                },
                preguntes: {
                    encertades: {
                        homes: 0,
                        dones: 0
                    },
                    fallades: {
                        homes: 0,
                        dones: 0
                    }
                }
            };
        }
    }

    // avatar por distrito y sexo
    // preguntas acertadas por sexo i distrito
    // preguntas falladas por sexo i distrito

    Avatar.find({}, function(err, avatars) {

        avatars.forEach(function (avatar) {
            if (avatar.gender === 'male') {
                result[avatar.district].count.homes += 1;

                if (avatar.answer.correctAnswer === avatar.answer.realAnswer) {
                    result[avatar.district].preguntes.encertades.homes += 1;
                }else{
                    result[avatar.district].preguntes.fallades.homes += 1;
                }

            }else if (avatar.gender === 'female') {
                result[avatar.district].count.dones += 1;

                if (avatar.answer.correctAnswer === avatar.answer.realAnswer) {
                    result[avatar.district].preguntes.encertades.dones += 1;
                }else{
                    result[avatar.district].preguntes.fallades.dones += 1;
                }
            }
        });
        res.json(result);
        //res.json(avatars);
    });
});



module.exports = router;
