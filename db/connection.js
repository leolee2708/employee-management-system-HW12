var util = require("util");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,
//my user name,
    user: "root",
//my password,
    password: "rootroot",
    database: "Employee_Management_Db"

});
connection.connect();
connection.query = util.promisify(connection.query, console.log('connected connection'));
module.exports = connection;