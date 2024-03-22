const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  fs.readFile("username.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "no chat exist"; // Assign a default value
    }
    res.send(
      `${data}<form action="/" method="POST"><input type="text" name="message" id="message"><input type="hidden" name="username" id="username"><br><button type="submit">Send</button></form><script>document.getElementById('username').value = localStorage.getItem('username');</script>`
    );
  });
});

app.post("/", (req, res) => {
  console.log(req.body.username);
  console.log(req.body.message);
  fs.writeFileSync(
    "username.txt",
    `${req.body.username}:${req.body.message}\n`, // Correct string interpolation
    { flag: "a" },
    (err) => {
      if (err) console.log(err);
    }
  );
  res.redirect("/");
});

app.get("/login", (req, res) => {
  res.send(
    '<form action="/login" method="POST"><input type="text" name="username" id="username"><br><button type="submit">Login</button></form>'
  );
});

app.post("/login", (req, res) => {
  console.log(req.body);

  // Send the username back to the client-side and store it in localStorage using JavaScript
  const username = req.body.username;
  res.send(
    `<script>localStorage.setItem("username", "${username}"); window.location.href = "/";</script>`
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
