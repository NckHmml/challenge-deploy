'use strict';
var
  app = require('express')(),
  port = process.env.PORT || 3000,
  parser = require('body-parser');

app.use(parser.json());

app.get('/', function (req, res, next) {
  res.send("Server is Running!!");
  return next();
});

app.get('/api/ping', function (req, res, next) {
  res.json('PONG');
  return next();
});

app.get('/api/notfound', function (req, res, next) {
  res.status(404).json('NotFound');
  return next();
});

app.post('/api/badrequest', function (req, res, next) {
  res.status(400).json('BadRequest');
  return next();
})

app.listen(port, function () {
  console.log('Server running with port', port);
});
