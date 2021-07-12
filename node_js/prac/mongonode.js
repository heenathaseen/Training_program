var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://heena:heena@baprojects.bassure.in:27017/heena";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("heena");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});