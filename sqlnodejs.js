var mysql = require('mysql');

var con = mysql.createConnection({
  host: '45.120.136.152',
  port:'3306',
  user: "heena",
  password: "heena",
  database: "heena"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE  car(name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err) {
    if (err) throw err;
    console.log("Table created");
    
  });
  
});