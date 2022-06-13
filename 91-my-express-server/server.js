//jshint esversion:6
const express = require("express");
const app = express();

// 主界面
app.get("/", function (req, res) {
  res.send("111");
});

// contact界面
app.get("/contact", function (req, res) {
  res.send("Contact me at: Kevin.huchenxi@yahoo.com");
});

// about界面
app.get("/about", function (req, res) {
  res.send("I am a fresh student in coding.");
});

app.listen(3000, function () {
  console.log("222");
});
