
const express = require('express')
const app = express()
const cors =require('cors')
app.use(cors({
    origin:"http://127.0.0.1:5500",
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    

}));
const mysql = require('mysql');
const { body, validationResult } = require('express-validator')

const coupon = require('./discount')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const pool = mysql.createPool({
    host: '45.120.136.152',
    port: '3306',
    user: 'thameem',
    //database: 'nodedb',
    database: 'thameem',
    password: 'thameem'
});
app.get("/products", (req, res) => {
  
    let sqlQuery = `SELECT * FROM items`

    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(sqlQuery, (err, results) => {
            connection.release(); // return the connection to pool
            if (err) throw err;
            res.json(results);

        });
    });
});

app.listen('3000', ()=>{

    console.log("Server started");

});