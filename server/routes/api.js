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
      console.log('API: all documents readed');
      res.send(result);
    });
  });
});

router.delete('/clean', (req, res) => {
  console.log(req.body);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('whichbin');
    dbo.collection("whichbin").drop(function(err, delOK) {
      if (err) throw err;
      if (delOK) {
        console.log('API: collection deleted');
        res.send(true);
      }
      db.close();
    });
  });
});

/* File System */
var fs = require('fs');
var path = require('path'), filePath = path.join(__dirname, 'base.json');

router.put('/import', (req, res) => {
  fs.readFile(filePath, {encoding: 'utf-8'}, (err, body) => {
    if (err) throw err;
    var tab = JSON.parse(body);
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db('whichbin');
      dbo.collection('whichbin').insert(tab, function(err, data){
        if (err) throw err;
        db.close();
        console.log("API: all imported from file");
        res.send(true);
      });
    });
  });
});

router.delete('/delete/:id', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('whichbin');
    var query = { _id: ObjectId(req.params.id)};
    dbo.collection('whichbin').remove(query, function(err, obj) {
      if (err) throw err;
      db.close();
      console.log('API: one document deleted (id:'+req.params.id+')');
      res.send(true);
    });
  });
});

/* ObjectID */
var ObjectId = require('mongodb').ObjectID;

router.post('/save', (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('whichbin');
    var myquery = { _id: ObjectId(req.body._id) };
    var newvalues = { $set: { name: req.body.name, place: req.body.place } };
    dbo.collection('whichbin').updateOne(myquery, newvalues, { upsert: true }, function(err, data) {
      if (err) throw err;
      db.close();
      console.log('API: one document updated: '+req.body._id+' | '+req.body.name+' | '+req.body.place);
      res.send(true);
    });
  });
});

router.post('/add', (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('whichbin');
    var myquery = { name: req.body.name };
    var newvalues = { $set: { place: req.body.place } };
    dbo.collection('whichbin').updateOne(myquery, newvalues, { upsert: true }, function(err, data) {
      if (err) throw err;
      db.close();
      console.log('API: one document added');
      res.send(true);
    });
  });
});

module.exports = router;