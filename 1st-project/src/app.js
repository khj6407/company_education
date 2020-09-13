const express = require("express");

const app = express();
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/node", (req, res) => {
  res.render("node");
});

app.listen(2020, () => {
  console.log("2020 PORT WEB SERVER START");
});
