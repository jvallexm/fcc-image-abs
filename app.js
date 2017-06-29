var fs = require('fs');
var express = require('express');
var app = express();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = process.env.MONGO_URL;

app.use('/public', express.static(process.cwd() + '/public'));

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
           var searches = db.collection('searches');
           var addOne = function(db,callback)
                        {
                          searches.insert({
                                      terms: theSearch,
                                      date: date
                                   },
                                   function(err,db){
                                      if(err) throw err;
                                   });
                        }
           addOne(db,function(){
             db.close();
           });
         }
         
       });
	     res.send(theSearch);
    });

app.route('/recent')
   .get(function(req,res){
   MongoClient.connect(url,function(err,db){
     if(err)
     {
       console.log("error connecting to database: "+err)
     }
     else
     {
        var searches = db.collection('searches');
        searches.find({},{_id:0})
         .toArray(function(err,docs){
           console.log("Array Length: " + docs.length);
           if(err) throw err;
           var te
             res.json(docs);
            db.close();
          });  
     }     
   });
  
});

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});
