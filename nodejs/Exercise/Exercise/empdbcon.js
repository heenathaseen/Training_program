const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '45.120.136.152', 
    port: '3306',
    user: 'pritam96',
    database:'Pritam',
    password: '969342'
});


// this promise helps  async  and also 2 functions then and catch
module.exports = pool.promise();