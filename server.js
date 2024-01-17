const http = require("http");
const fs = require("fs");
const _ = require('lodash')

const server = http.createServer((req, res) => {

  let num = _.random(0,20)
  console.log(num);

  let path = "./";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  res.setHeader("Content-Type", "text/html");

  fs.readFile(path, (err, data) => {
    if (err) console.log(err);
    else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port number 3000");
});
