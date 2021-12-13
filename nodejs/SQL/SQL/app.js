const express = require("express");
const mysql = require('mysql');

// create connection

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    //database: 'nodedb',
    database:'nodemysql',
    password: ''
});

// connect
pool.getConnection((err, connection) => {
    if(err) throw err;
    console.log('connected as id ' + connection.threadId);
    
});

const app = express();

// Create DB
app.get("/createDB",(req,res)=>{
    let sqlQuery = "CREATE DATABASE IF NOT EXISTS nodemysql";
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(sqlQuery, (err, result) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
            console.log('Datbase is created ' + result);
            res.send("Database created ..");
        });     
    });
    

});

// create table
app.get("/createTable",(req,res)=>{
    let sqlQuery = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(sqlQuery, (err, result) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
            console.log(result);
            res.send("Posts table created ..");
        });     
    });
});


// insert post 1 
app.get("/addPost1",(req,res)=>{
    let post = {title:"Post One", body:"This is my first post"}
    // ? is placeholder
    let sqlQuery = 'INSERT INTO posts SET ?'
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(sqlQuery, post, (err, result) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
            console.log(result);
            res.send("Post one added ... ");
        });     
    });
});

// insert post 2
app.get("/addPost2",(req,res)=>{
    let post = {title:"Post Two", body:"This is my second post"}
    let sqlQuery = 'INSERT INTO posts SET ?'
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(sqlQuery, post, (err, result) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
           
            console.log(result);
            res.send("Post 2 added ... ");
        });     
    });
});

// select posts

app.get("/selectPost",(req,res)=>{   
    let sqlQuery = 'SElECT * FROM posts'
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(sqlQuery, (err, results) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
            console.log(results);
           // console.log('The data from users table are: \n', rows);
            res.send("Posts fetched ... ");
        });     
    });
});


// select a post
app.get("/selectPost/:id",(req,res)=>{   
    let sqlQuery = `SElECT * FROM posts where id =  ${req.params.id}`;
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(sqlQuery, (err, result) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
            console.log(result);
           // console.log('The data from users table are: \n', rows);
           res.send(`Post ${req.params.id} fetched ... `);
        });     
    });
});

// update post 


app.get("/updatePost/:id",(req,res)=>{   
    let newTitle = "update title"
    let sqlQuery = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(sqlQuery, (err, result) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
            console.log(result);
           // console.log('The data from users table are: \n', rows);
            res.send(`Post ${req.params.id} updated  ... `);
        });     
    });
});


// delete post
app.get("/deletePost/:id",(req,res)=>{  
    
    let sqlQuery = `DELETE FROM posts  WHERE id = ${req.params.id}`
    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query(sqlQuery, (err, result) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
            console.log(result);
           // console.log('The data from users table are: \n', rows);
            res.send(`Post ${req.params.id} deleted  ... `);
        });     
    });
});


app.listen('3000', ()=>{
    console.log("Server started");
});








// npm install -g nodemon -- to avoid restarting server for every change 