const express = require("express");
//express app
const app = express();

//register view engine
app.set("view engine", "ejs");

//listen for request
app.listen(3000);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("index");
});

app.use((req, res) => {
  res.render("404");
});
