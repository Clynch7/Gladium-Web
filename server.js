'use strict';

var HTTP_PORT = 8000;
var express = require('express');
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('',function(req,res){
    res.sendFile(__dirname + "/index.html")
});
app.listen(HTTP_PORT,function(){
})