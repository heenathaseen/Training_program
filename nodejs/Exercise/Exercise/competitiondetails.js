const express = require("express");
const mysql = require('mysql'); 


const pool = mysql.createPool({
    host: '45.120.136.152', 
    port: '3306',
    user: 'pritam96',
    database:'pritam',
    password: '969342'
});


// connect
pool.getConnection((err, connection) => {
    if(err) throw err;
    console.log('connected as id ' + connection.threadId);
    
});

const app = express();


// create table
app.get("/createTable",(req,res)=>{
    let empCompetitionDetailsTable = 'CREATE TABLE empcompetitionDetail(id int AUTO_INCREMENT,  description VARCHAR(255), rewardAmount INT(100), dateOfTheCompetion INT(50), PRIMARY KEY (id))';
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(empCompetitionDetailsTable, (err, result) => {
            connection.release(); 
            if(err) throw err;
            console.log(result);
            res.send("Employee competition Details table created ..");
        });     
    });
});



app.get("/addempCompetitionDetail",(req,res)=>{
    let empCompetitionDetailsTable = 'INSERT INTO empcompetitionDetail(description, rewardAmount, dateOfTheCompetion)VALUES("In Singing Competition Total Participations were ten","2000", "2021-06-21"),("In drawing Competition Total Participations were ten","3000", "2021-07-11"),("In Photography Competition Total Participations were ten","4000", "2021-08-12")'
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(empCompetitionDetailsTable, (err, result) => {
            connection.release(); 
            if(err) throw err;
            console.log(result);
            res.send("Employee Competition Detail record added ... ");
        });     
    });
});  

 
app.get("/selectempCompetitionDetail",(req,res)=>{   
    let empCompetitionDetailsTable = 'SElECT * FROM empcompetitionDetail'
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(empCompetitionDetailsTable, (err, results) => {
            connection.release(); 
            if(err) throw err;
            console.log(results);
            res.send("Employee Competition Detail Data fetched ... ");
        });     
    });
});



app.get("/selectempCompetitionDetail/:id",(req,res)=>{   
    let empCompetitionDetailsTable = `SElECT * FROM empcompetitionDetail where id =  ${req.params.id}`;
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(empCompetitionDetailsTable, (err, result) => {
            connection.release(); 
            if(err) throw err;
            console.log(result);
           res.send(`empcompetitionDetails ${req.params.id} fetched ... `);
        });     
    });
});


app.get("/updateempCompetitionDetail/:id",(req,res)=>{   
    let newTitle = "update title"
    let empCompetitionDetailsTable = `UPDATE empcompetitionDetail SET title = '${newTitle}' WHERE id = ${req.params.id}`
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(empCompetitionDetailsTable, (err, result) => {
            connection.release(); 
            if(err) throw err;
            console.log(result);
            res.send(`empcompetitionDetails ${req.params.id} updated  ... `);
        });     
    });
});


app.get("/deleteempCompetitionDetail/:id",(req,res)=>{     
    let empCompetitionDetailsTable = `DELETE FROM empcompetitionDetail WHERE id = ${req.params.id}`
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(empCompetitionDetailsTable, (err, result) => {
            connection.release(); 
            if(err) throw err;
            console.log(result);
            res.send(`empCompetitionDetails ${req.params.id} deleted  ... `);
        });     
    });
});


app.listen('7000', ()=>{
    console.log("Server started");
});

