var fs = require('fs');
var express = require('express');
var app = express();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = process.env.MONGO_URL;

app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    });

app.route('/search/:searchTerms')
   .get(function(req, res) 
    {
       var theSearch = req.params.searchTerms;
       MongoClient.connect(url,function(err,db){
         if(err)
         {
           console.log("error connecting to database: "+err)
         }
         else
         {
           var date = new Date();
           var searches = 
           
         }
         
       });
	     res.send(theSearch);
    });


app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});
