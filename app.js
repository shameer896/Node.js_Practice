const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { result } = require("lodash");
const Blog = require("./models/blog");

//connect to mongo db
const db =
  "mongodb+srv://user1:test1234@cluster0.qn9jiea.mongodb.net/blog-documents?retryWrites=true&w=majority";
mongoose
  .connect(db)
  .then((result) => console.log("db connected"))
  .catch((err) => console.log(err));

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");

//listen for request
app.listen(3000);

app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blog = [{ b: 2 }, { b: 4 }, { b: 6 }];
  res.render("index", { title: "home", blog });
});

app.get("/about", (req, res) => {
  res.render("index");
});

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new",
    snippet: "about",
    body: "more about",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use((req, res) => {
  res.render("404", { title: "Error - 404" });
});
