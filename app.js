var fs = require('fs');
var express = require('express');
var app = express();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;



app.use('/public', express.static(process.cwd() + '/public'));
app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    });

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});
