const express = require("express");
const path = require("path");
const app = express();

const INDEX_FILE_PATH = path.join(__dirname, "./index.html");
const CONTENT_FILE_PATH = path.join(__dirname, "./content.txt");

app.get("/", (req, res) => {
  res.sendFile(INDEX_FILE_PATH);
});

app.get("/content", (req, res) => {
  res.sendFile(CONTENT_FILE_PATH)
});

app.listen(3000, () => console.log("Server is running ...."));