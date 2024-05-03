const mysql = require('mysql')

const pool = mysql.createPool({
    // host: process.env.MYSQL_HOST,
    // user: process.env.MYSQL_USER,
    // password: process.env.MYSQL_PASSWORD,
    // database: process.env.MYSQL_DATABASE
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Amit',
    database: 'xcare'
})

pool.getConnection(function(err, connection) {
    if (err) {
      console.log(err);
      return
    }
    else{
        console.log('connected as id ' + connection.threadId);
    }
  });

module.exports = {pool}