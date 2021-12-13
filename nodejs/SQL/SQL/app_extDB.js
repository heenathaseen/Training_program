const express = require("express");
const db = require('./sqlConnection');



const app = express();

// Create DB
app.get("/createDB",(req,res)=>{
    let sqlQuery = "CREATE DATABASE nodemysql";
    db.execute(sqlQuery)
    .then(result => {
        //console.log(result); 
        console.log('Datbase is created ' + result);
        res.send("Database created ..");
    })
    .catch(err => {
        console.log(err);
    });    
});

// create table
app.get("/createTable",(req,res)=>{
    let sqlQuery = 'CREATE TABLE posts2(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
    db.query(sqlQuery)
    .then(result => {
        //console.log(result); 
        console.log(result);
        res.send("Posts table created ..");
    })
    .catch(err => {
        console.log(err);
    });             
});


// insert post 1 
app.get("/addPost1",(req,res)=>{
        let post =["Post One", "This is my first post"]
        // ? is placeholder
        let sqlQuery = 'INSERT INTO posts (`title`, `body`) VALUES (?,?)'
        db.execute(sqlQuery, post) 
        .then(result => {
            //console.log(result); 
            console.log(result);
            res.send("Posts one created ..");
        })
        .catch(err => {
            console.log(err);
        });     
});


// insert post 2
app.get("/addPost2",(req,res)=>{
    let post = ["Post Two", "This is my second post"]
    // ? is placeholder
    let sqlQuery = 'INSERT INTO posts (`title`, `body`) VALUES (?,?)'
    db.execute(sqlQuery, post) 
    .then(result => {
        //console.log(result); 
        console.log(result);
        res.send("Posts 2 created ..");
    })
    .catch(err => {
        console.log(err);
    });     
});

// select posts

app.get("/selectPost",(req,res)=>{   
    let sqlQuery = 'SElECT * FROM posts'
    db.query(sqlQuery)
    .then(result => {
        //console.log(result); 
        console.log(result);
        res.send("Posts fetched ..");
    })
    .catch(err => {
        console.log(err);
    });    
   
});


// select a post
app.get("/selectPost/:id",(req,res)=>{   
    let sqlQuery = `SElECT * FROM posts where id =  ${req.params.id}`;
    db.query(sqlQuery)
    .then(result => {
        //console.log(result); 
        console.log(result);
        res.send(`Post ${req.params.id} fetched ..`);
    })
    .catch(err => {
        console.log(err);
    });
});

// update post 


app.get("/updatePost/:id",(req,res)=>{   
    let newTitle = "update title"
    let sqlQuery = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`
    db.query(sqlQuery)
    .then(result => {
        //console.log(result); 
        console.log(result);
        res.send(`Post ${req.params.id} updated ..`);
    })
    .catch(err => {
        console.log(err);
    });
});


// delete post
app.get("/deletePost/:id",(req,res)=>{  
    
    let sqlQuery = `DELETE FROM posts  WHERE id = ${req.params.id}`
    db.query(sqlQuery)
    .then(result => {
        //console.log(result); 
        console.log(result);
        res.send(`Post ${req.params.id} deleted ..`);
    })
    .catch(err => {
        console.log(err);
    });
});


app.listen('3000', ()=>{
    console.log("Server started");
});








// npm install -g nodemon -- to avoid restarting server for every change 