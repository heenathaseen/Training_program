const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    //database: 'nodedb',
    database:'nodemysql',
    password: ''
});


// this promise helps  async  and also 2 functions then and catch
module.exports = pool.promise();