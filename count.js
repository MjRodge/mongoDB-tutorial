const mongo = require('mongodb').MongoClient;
var ageFilter = parseInt(process.argv[2]);
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, db){
  if (err) {
    console.log(err);
  }
  var parrots = db.collection("parrots");

  parrots.count({
    age: {$gt: ageFilter}
  }, function(err, data) {
    if (err) {
      console.log(err);
    }
    console.log(data);
    db.close();
  });
})
