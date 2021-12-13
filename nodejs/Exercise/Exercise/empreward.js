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
    let emprewardTable = 'CREATE TABLE empRewards(id int AUTO_INCREMENT, competition VARCHAR(55), DateOfRewardReceived DATE, AmountOfTheReward INT(50), PRIMARY KEY (id))';
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(emprewardTable, (err, result) => {
            connection.release(); 
            if(err) throw err;
            console.log(result);
            res.send("Employee Rewards table created ..");
        });     
    });
});



app.get("/addempreward",(req,res)=>{
    let emprewardTable = 'INSERT INTO empRewards(competition, DateOfRewardReceived, AmountOfTheReward)VALUES("Singing","2021-06-21", "10"),("Drawing","2021-07-11", "11"),("Photography","2021-08-12", "14")'
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(emprewardTable, (err, result) => {
            connection.release(); 
            if(err) throw err;
            console.log(result);
            res.send("Employee Rewards record added ... ");
        });     
    });
});  

 
app.get("/selectempreward",(req,res)=>{   
    let emprewardTable = 'SElECT * FROM empRewards'
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(emprewardTable, (err, results) => {
            connection.release(); 
            if(err) throw err;
            console.log(results);
            res.send("Employee Rewards Data fetched ... ");
        });     
    });
});



app.get("/selectempreward/:id",(req,res)=>{   
    let emprewardTable = `SElECT * FROM empRewards where id =  ${req.params.id}`;
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(emprewardTable, (err, result) => {
            connection.release(); 
            if(err) throw err;
            console.log(result);
           res.send(`emprewards ${req.params.id} fetched ... `);
        });     
    });
});


app.get("/updateempreward/:id",(req,res)=>{   
    let newTitle = "update title"
    let emprewardTable = `UPDATE empRewards SET title = '${newTitle}' WHERE id = ${req.params.id}`
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(emprewardTable, (err, result) => {
            connection.release(); 
            if(err) throw err;
            console.log(result);
            res.send(`emprewards ${req.params.id} updated  ... `);
        });     
    });
});


app.get("/deleteempreward/:id",(req,res)=>{     
    let emprewardTable = `DELETE FROM empRewards WHERE id = ${req.params.id}`
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(emprewardTable, (err, result) => {
            connection.release(); 
            if(err) throw err;
            console.log(result);
            res.send(`emprewards ${req.params.id} deleted  ... `);
        });     
    });
});


app.listen('7000', ()=>{
    console.log("Server started");
});

