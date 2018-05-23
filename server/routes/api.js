const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});



/* MongoDB connection */
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://whichbin:whichbin@ds233320.mlab.com:33320/whichbin';



router.get('/read', (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('whichbin');
    var query = { };
    dbo.collection('whichbin').find(query).toArray(function(err, result) {
      if (err) throw err;
      db.close();
      console.log('all documents readed');
      res.send(result);
    });
  });
});


var ObjectId = require('mongodb').ObjectID;

router.delete('/delete/:id', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('whichbin');
    var query = { _id: ObjectId(req.params.id)};
    dbo.collection('whichbin').remove(query, function(err, obj) {
      if (err) throw err;
      db.close();
      console.log('one document deleted (id:'+req.params.id+')');
      res.send(true);
    });
  });
});



router.get('/insert', (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('whichbin');
    var myobj = { name: 'testowy', place: 'testowe' };
    dbo.collection('whichbin').insertOne(myobj, function(err, data) {
      if (err) throw err;
      db.close();
      console.log('insert 1 works');
      res.send('insert 1 works');
    });
  });
});



router.get('/clean', (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('whichbin');
    dbo.collection("whichbin").drop(function(err, delOK) {
      if (err) throw err;
      if (delOK) {
        console.log('collection deleted');
        res.send('collection deleted');
      }
      db.close();
    });
  });
});



var fs = require('fs');
var path = require('path'), filePath = path.join(__dirname, 'base.json');

router.get('/import', (req, res) => {

  fs.readFile(filePath, {encoding: 'utf-8'}, (err, body) => {
    if (err) throw err;
    var tab = JSON.parse(body);

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db('whichbin');
      dbo.collection('whichbin').insert(tab, function(err, data){
        if (err) throw err;
        db.close();
        console.log("import all works");
        res.send('import all works');
      });
    });

  });
  
});



module.exports = router;