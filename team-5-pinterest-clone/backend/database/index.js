const mysql = require("mysql2");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

connection.connect(() => {
  console.log("Database connection established");
});

module.exports = connection;
