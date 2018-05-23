const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});



/* MongoDB connection */
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://whichbin:whichbin@ds233320.mlab.com:33320/whichbin';

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