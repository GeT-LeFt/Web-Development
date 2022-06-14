//jshint esversion:6

//Requiring our two packages that we justinstalled:
//express and body-parser.
const express = require("express");
const bodyparser = require("body-parser");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

//Creating our app constant by usingexpress.
const app = express();

//Setup ejs
//assumes a views directory containing an index.ejs page
app.set("view engine", "ejs");

//use the bodyParser
//add public file
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Creating a simple get route that
//just sends the browser the word hello when
//a user tries to access the home route.

const items = ["Buy Food", "dsadfs", "fsdfsf"];
const workItems = [];

app.get("/", function (req, res) {
  const day = date.getDate();

  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  const item = req.body.newItem;
  if (req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "work list", newListItems: workItems });
});

//Listening on port 3000 and we console log that
//our server has been started.
app.listen(3000, function () {
  console.log("3000");
});
