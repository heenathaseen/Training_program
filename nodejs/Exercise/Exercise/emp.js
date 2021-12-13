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
// app.get("/createTable",(req,res)=>{
//     let empTable = 'CREATE TABLE emp(id int AUTO_INCREMENT, firstName VARCHAR(255), lastName VARCHAR(255), DateOfBirth DATE, DateOfJoining DATE, YearOfExp INT(2), Dept VARCHAR(255), PRIMARY KEY (id))';
//     pool.getConnection((err, connection) => {
//         if(err) throw err;
//         connection.query(empTable, (err, result) => {
//             connection.release(); 
//             if(err) throw err;
//             console.log(result);
//             res.send("Employee table created ..");
//         });     
//     });
// });



app.get("/addemp",(req,res)=>{  
    let empTable = 'INSERT INTO emp(firstName, lastName, DateOfBirth, DateOfJoining, YearOfExp, Dept)VALUES("Pritam","Kumari", "1996-07-13", "2018-06-14", "3", "Software Developer"),("Heena","Thaseen", "1998-10-22", "2019-04-14", "2","HR"),("Priya","Pandey", "1995-08-15", "2000-06-10", "1","Tester")'
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(empTable, (err, result) => {
            connection.release(); 
            if(err) throw err;
            console.log(result);
            res.send("Employee Records added ... "); 
        });     
    });
});  


 
app.get("/selectemp",(req,res)=>{   
    let empTable = 'SElECT * FROM emp'
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(empTable, (err, results) => {
            connection.release(); 
            if(err) throw err;
            console.log(results);
            res.send("Employee Data fetched ... ");
        });     
    });
});



app.get("/selectemp/:id",(req,res)=>{   
    let empTable = `SElECT * FROM emp where id =  ${req.params.id}`;
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(empTable, (err, result) => {
            connection.release(); 
            if(err) throw err;
            console.log(result);
           res.send(`emp ${req.params.id} fetched ... `);
        });     
    });
});


app.get("/updateemp/:id",(req,res)=>{   
    let newTitle = "update title"
    let empTable = `UPDATE emp SET title = '${newTitle}' WHERE id = ${req.params.id}`
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(empTable, (err, result) => {
            connection.release(); 
            if(err) throw err;
            console.log(result);
            res.send(`emp ${req.params.id} updated  ... `);
        });     
    });
});


app.get("/deleteemp/:id",(req,res)=>{  
    
    let empTable = `DELETE FROM emp  WHERE id = ${req.params.id}`
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(empTable, (err, result) => {
            connection.release(); 
            if(err) throw err;
            console.log(result);
            res.send(`emp ${req.params.id} deleted  ... `);
        });     
    });
}); 



app.listen('8000', ()=>{
    console.log("Server started");
});

