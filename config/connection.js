// Dependencies
var mysql = require("mysql");

// Set mysql connection parameters
var connection = mysql.createConnection({
host: "localhost",
port: 8889,
user: "root",
password: "root",
database: "burgers_db"
});

// Make connection
connection.connect(function(err) {
if (err) {
    console.error("error connecting: " + err.stack);
    return;
}
console.log("connected as id " + connection.threadId);
});

// Export connection for ORM
module.exports = connection;
