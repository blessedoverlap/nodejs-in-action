var http = require('http');
var counter = 0;

http.createServer(function(req, res) {
  counter++;
  res.end(counter + ' views since last server restart.');
}).listen(3000);
