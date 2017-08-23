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
  var sql = 'select * from user_massage';
      connection.query(sql, function (err, result) {
          if (err) {
              console.log(err);
              return;
          }
          result=data_to_JSON(result);
          res.setHeader('content-type', 'text/html;charset=utf8'); //设置返回页面字符集
          res.end(result);
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
