const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" placeholder="Product Title"><br><input type="number" name="size" placeholder="Product Size"><br><button type="submit">Add product</button></form>'
  );
});
app.post("/product", (req, res, next) => {
  console.log(req.body);
  //console.log(req.body);

  // console.log(req.body.size);

  res.redirect("/");
});
app.use("/", (req, res, next) => {
  console.log("another middleware");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(8000);
