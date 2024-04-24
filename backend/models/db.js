var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "todolist",
  port: 3306
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = mysql;
