var express = require('express');
var router = express.Router();
var mysql = require('./mysql');


router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/doLogin', function (req, res, next) {

    var reqUsername = req.body.username;
    var reqPassword = req.body.password;

    var checkLoginQuery = "SELECT * FROM login.user WHERE user.username = '" + reqUsername + "' AND user.password = '" + reqPassword + "'";
    console.log("query is :" + checkLoginQuery);

    mysql.fetchData(function (err, results) {
        if (err) {
            console.log("error in fetching data in user.js is :" + err);
            throw err;
        } else {
            if (results.length > 0) {
                res.status(201).json({message: "Login successful"});
            } else {
                res.status(401).json({message: "Login failed"});
            }
        }
    }, checkLoginQuery);
});

module.exports = router;
