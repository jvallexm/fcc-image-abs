var fs = require('fs');
var express = require('express');
var app = express();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    });

app.route('/search/:searchTerms')
   .get(function(req, res) 
    {
       var searchTerms = searchTerms;
	     res.send(searchTerms);
    });

app.use(function(req,res,next){
    console.log(req);
    res.send(req.originalUrl);
});

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});
