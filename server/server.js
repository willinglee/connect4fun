var express = require('express');
var app = express();

var port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/../app'));

app.listen(port);
console.log('App listening on', port);

module.exports = app;
