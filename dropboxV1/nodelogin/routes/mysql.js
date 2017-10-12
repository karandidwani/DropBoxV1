var mysql = require('mysql');

function getConnection() {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Root@123',
        database: 'login',
        port: 3306
    });
    return connection;
}

function fetchData(callback, sqlQuery) {
    var connection = getConnection();
    connection.query(sqlQuery, function (err, rows) {
        if (err) {
            console.log("error in executing query in mysql.js is : " + err);
            throw err;
        } else {
            console.log("Results of SQL queries are : " + rows);
            callback(err, rows);
        }
    });
    console.log("connection closed");
    connection.end();
}

exports.fetchData = fetchData;

function insertData(callback, sqlQuery) {
    var connection = getConnection();
    connection.query(sqlQuery, function (err, rows) {
        if (err) {
            console.log("error in executing query in mysql.js is : " + err);
            throw err;
        } else {
            console.log("Results of SQL queries are : " + rows);
            callback(err, rows);
        }
    });
    console.log("connection closed");
    connection.end();
}

exports.insertData = insertData;