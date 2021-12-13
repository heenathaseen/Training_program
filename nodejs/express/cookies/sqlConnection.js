const mysql = require('mysql');

const pool = mysql.createPool({
    host: '45.120.136.152',
    port:'3306',
    user: 'thameem',
    database: 'thameem',
    password: 'thameem'
});

pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});



module.exports=pool;