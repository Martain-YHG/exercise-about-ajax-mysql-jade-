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
    var sql = 'insert into user_massage(_order,_name,_password,_profession,_id)values(?,?,?,?,7)';
    var info = ["user4", "mohit", "password4", "teacher"];
    // connection.connect();
    connection.query(sql, info, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        else {
            console.log('ok');;
        }
    });
});
function data_to_JSON(data) {
  var array = {};
  for (var i = 0; i < data.length; i++) {
      var key = data[i]._order;
      array[key] = {
          'name': data[i]._name,
          'password': data[i]._password,
          'profession': data[i]._profession,
          'id': data[i]._id
      };
  }
  return array;
}

module.exports = router;