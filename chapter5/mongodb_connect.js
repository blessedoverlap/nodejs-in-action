var mongodb = require('mongodb')
  , server = new mongodb.Server('127.0.0.1', 27017, {})
  , client = new mongodb.Db('mtest', server);

client.open(function(err) {
  if (err) throw err;
  client.collection('test_insert', function(err, collection) {
    if (err) throw err;
    console.log('We are now able to perform queries.');
  });
})
