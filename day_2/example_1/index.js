const express = require("express");
const path = require("path");
const app = express();

const INDEX_FILE_PATH = path.join(__dirname, "./index.html");
const JSON_FILE_PATH = path.join(__dirname, "./userRecords.json");

app.get("/", (req, res) => {
  res.sendFile(INDEX_FILE_PATH);
});

app.get("/users", (req, res) => {
  res.sendFile(JSON_FILE_PATH);
});

app.listen(3000, () => console.log("Server is running ...."));