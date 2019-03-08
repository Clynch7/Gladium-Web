'use strict';

var HTTP_PORT = 8000;
var express = require('express');
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public/"));

app.get('',function(req,res){
    res.sendFile(__dirname + "/templates/index.html")
});
app.post('/createGladiator', function(req,res){

});
app.listen(HTTP_PORT,function(){
})