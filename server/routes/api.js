const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');


  /**
   * MongoDB connection
   */
  const MongoClient = require('mongodb').MongoClient;
  const url = "mongodb://whichbin:whichbin@ds233320.mlab.com:33320/whichbin";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("whichbin");
    var myobj = { name: 'artykuły higieniczne', place: 'odpady zmieszane' };
    dbo.collection("whichbin").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });


});

module.exports = router;