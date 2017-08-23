var express = require('express');
var router = express.Router();
var mysql=require('mysql');
/* GET home page. */

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  port: '3306',
  database: 'demo1'
});

router.get('/', function(req, res) {
    var del = 'delete from user_massage where _id=' + id.toString();
    connection.query(del, function (err, result) {
        if (err) {
            console.log('err');
        }
        console.log("delete ok");
    });
    // connection.end();

})