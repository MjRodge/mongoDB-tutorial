const mongo = require('mongodb').MongoClient;
var minAge = parseInt(process.argv[2]);
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, db) {
  if (err) {
    console.log(err);
  }
  var parrots = db.collection("parrots");
  parrots.find({
    age: {$gt: minAge}
  }).toArray(function(err, ageData) {
    if (err) {
      console.log(err);
    }
    console.log(ageData);
    db.close();
  });
})
