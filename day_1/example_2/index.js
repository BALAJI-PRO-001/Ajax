const express = require("express");
const path = require("path");
const app = express();

const FILE_PATH = path.join(__dirname, "./index.html");

app.get("/", (req, res) => {
  res.sendFile(FILE_PATH);
});

app.post("/ajax", (req, res) => {
  res.end("<h1> Response from express server </h1>");
});

app.listen(3000, () => console.log("Server is running ...."));

