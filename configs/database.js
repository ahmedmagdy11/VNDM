const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database:'company'
});


module.exports = connection;