//import dependencies
var express = require("express");
var path = require("path");
var fs = require ("fs");
//var routes = require("./routes")
var data = require("./db/db.json")

//create express server
var app = express()

//define PORT
var PORT = process.env.PORT || 8080;

//start the server
app.listen(PORT, function(){
    console.log("The server is listening at http://localhost:" + PORT)
});

//add middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());



