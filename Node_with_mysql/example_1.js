const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  // password: "root"
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected!");
});