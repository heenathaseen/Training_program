var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var cors = require('cors');
var app = express(); 

// Body Parser Middleware
app.use(bodyParser.json()); 
app.use(cors());

//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

 var con = mysql.createConnection({
    host: '45.120.136.152',
    port:'3306',
    user: "heena",
    password: "heena",
    database: "heena"
  });

  app.post("/api/employee", function(req , res){
	postEmployees()
});
function postEmployees() {
     con.connect(function(err) {
        if (err) throw err;
        console.log("connected");
    });
    
    createTable();
    let command = "INSERT INTO Collegead(FirstName, LastName, CollegeName, Department,Email,MobileNumber) VALUES ('" + firstName + "','" + lastName + "','" + collegeName + "','" + department + "' ,'" + email + "','" + phoneNumber + "')";
    con.query(command, function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result.affectedRows + " record(s) updated");
        disconnect();
    });;
}
function createTable() {
    let createTable = "CREATE TABLE Collegead(id int auto_increment,FirstName varchar(20), LastName varchar(20),CollegeName varchar(20),Department varchar(20), Email varchar(20), MobileNumber int,primary key(id),unique key(MobileNumber))";
    con.query(createTable, function(err) {
        if (err) throw err;
        console.log("Table created");
    });
}
function disconnect() {
    con.end(function(err) {
        if (err) throw err;
        console.log("disconnect");
        console.log("Thank you");
    });
}
