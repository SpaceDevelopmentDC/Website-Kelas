const express = require("express") 
const { red, green, blue, magenta, cyan, white, gray, black } = require("chalk");
const app = require('express').Router();
const path = require("path")

app.get('/docs', function(req, res){
  res.render('docs.ejs');
  console.log(green("Docs are loaded in and ready to be used"))
});
const templateDir = path.resolve(`${process.cwd()}${path.sep}/views`);
app.use("/assets", express.static(path.resolve(`${templateDir}${path.sep}/assets`)))
app.use("/css", express.static(path.resolve(`${templateDir}${path.sep}assets/css`)));
  app.use("/js", express.static(path.resolve(`${templateDir}${path.sep}assets/js`)));
  app.use("/img", express.static(path.resolve(`${templateDir}${path.sep}assets/img`)));
module.exports = app;