var express = require('express');
var router = express.Router();
var mysql = require('./mysql');


router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/doLogin', function (req, res) {

    var reqUsername = req.body.username;
    var reqPassword = req.body.password;

    var checkLoginQuery = "SELECT * FROM dropboxdb.userdata WHERE userdata.email = '" + reqUsername + "' AND userdata.password = '" + reqPassword + "'";
    console.log("query is :" + checkLoginQuery);

    mysql.fetchData(function (err, results) {
        if (err) {
            console.log("error in fetching data in user.js is :" + err);
            throw err;
        } else {
            if (results.length > 0) {
                res.status(201).json({message: "Login successful"});
            } else {
                console.log(results);
                res.status(401).json({message: "Login failed"});
            }
        }
    }, checkLoginQuery);
});

router.post('/doSignup', function (req, res) {

    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var password = req.body.password;

    var insertQuery = "insert into dropboxdb.userdata (firstname, lastname, email, password) values ('" + firstname + "','" + lastname + "','" + email + "','" + password + "');";
    console.log("query is :" + insertQuery);

    mysql.insertData(function (err, results) {
        if (err) {
            console.log("error in inserting data in user.js is :" + err);
            res.status(401).json({message: "Signup failed"});
            throw err;
        } else {
            console.log("Data inserted");
            res.status(201).json({message: "Signup successful"});
        }

    }, insertQuery);
});

module.exports = router;
