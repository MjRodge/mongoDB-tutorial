const mongo = require('mongodb').MongoClient;
var forename = process.argv[2];
var surname = process.argv[3];
var url = "mongodb://localhost:27017/learnyoumongo";

var inserted = {
  firstName: forename,
  lastName: surname
};

mongo.connect(url, function(err, db){
  if (err) {
    console.log(err);
  }
  var docs = db.collection("docs");

  docs.insert(inserted, function(err, data){
    if (err) {
      console.log(err);
    }
    console.log(JSON.stringify(inserted));
    db.close();
  });
})
