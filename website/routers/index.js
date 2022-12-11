const { red, green, blue, magenta, cyan, white, gray, black } = require("chalk");
const express = require("express") 
const app = require('express').Router();
const path = require("path")

console.log(cyan("[🌍 SITE] Site loaded"))

app.get('/', function(req, res){
  res.render('index.ejs');
  console.log(green("Index / Home menu has loaded"))
});

app.get('/downloads', function(req, res){
  res.render('download.ejs');
  console.log(green("Docs are loaded in and ready to be used"))
});

  
const templateDir = path.resolve(`${process.cwd()}${path.sep}/views`);
app.use("/assets", express.static(path.resolve(`${templateDir}${path.sep}/assets`)))
app.use("/css", express.static(path.resolve(`${templateDir}${path.sep}assets/css`)));
  app.use("/js", express.static(path.resolve(`${templateDir}${path.sep}assets/js`)));
  app.use("/img", express.static(path.resolve(`${templateDir}${path.sep}assets/img`)));
  app.use("/cdn", express.static(path.resolve(`${templateDir}${path.sep}assets/cdn`)));

  app.use((req, res) => {
  req.query.code = 404;
  req.query.message = `Oops? Where did we go, check if you wrote the right text?.`;
  res.status(404).render("error.ejs");
  console.log(red("404 page has loaded in"))
  })

    app.use((req, res) => {
  req.query.code = 404;
  req.query.message = `Oops? Where did we go, check if you wrote the right text?.`;
  res.status(404).render("error.ejs");
  console.log(red("404 page has loaded in"))
  })


module.exports = app;