const mongo = require('mongodb').MongoClient;
var dbName = process.argv[2];
var col = process.argv[3];
var id = process.argv[4];
var url = "mongodb://localhost:27017/"+dbName;

mongo.connect(url, function(err, db){
  if (err) {
    console.log(err);
  }
  var collection = db.collection(col);

  collection.remove({
    _id: id
  }, function(err, data){
    if (err) {
      console.log(err);
    }
    db.close();
  });
})
