const express = require("express");
const mysql = require('mysql');
const app = express();
const pool = mysql.createPool({
    host: '45.120.136.152',
    port:'3306',
    user: 'thameem',
    database: 'thameem',
    password: 'thameem'
});

app.get("/getAll", (req, res) => {

    let sqlQuery = 'SElECT * FROM items'

    pool.getConnection((err, connection) => {

        if (err) throw err;

        connection.query(sqlQuery, (err, results) => {

            connection.release(); // return the connection to pool

            if (err) throw err;

            console.log(results);

            res.json(results);

        });

    });

});
app.get("/getOne", (req, res) => {

    let sqlQuery = 'SElECT * FROM items'

    pool.getConnection((err, connection) => {

        if (err) throw err;

        connection.query(sqlQuery, (err, results) => {

            connection.release(); // return the connection to pool

            if (err) throw err;

            console.log(results);

            res.json(results);

        });

    });

});

app.listen('4000', () => {
    console.log("Server started");
});
