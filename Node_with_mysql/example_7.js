const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  // password: "root",
  database: "NODE_MYSQL"  
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected!");
});

db.query("DELETE FROM USERS WHERE ID = 1", (err) => {
  if (err) throw err;
  console.log("Deleted successfully!");
});