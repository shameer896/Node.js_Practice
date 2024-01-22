const express = require("express");
const morgan = require("morgan");

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");

//listen for request
app.listen(3000);

app.use(morgan('dev'));

app.get("/", (req, res) => {
  const blog = [{ b: 2 }, { b: 4 }, { b: 6 }];
  res.render("index", { title: "home", blog });
});

app.get("/about", (req, res) => {
  res.render("index");
});

app.use((req, res) => {
  res.render("404", { title: "Error - 404" });
});
