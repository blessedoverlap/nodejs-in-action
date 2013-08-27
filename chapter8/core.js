var connect = require('connect');


var app = connect()
  .use(connect.logger('dev'))
  .use(hello)
  .listen(3000);

function hello(req, res, next) {
  res.end('hello');
}
