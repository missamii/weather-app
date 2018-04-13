var http = require('http');
var request = require('request');
var app = '';

app.get('/frontend', function(req, res) {
  res.send("Hello World");

});
var server = app.listen(8080, function() {
  console.log("listening to server", server.address().port);
});