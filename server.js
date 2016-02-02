var http = require('http');

var GOODPORT = 7000;
var BADPORT = 7500;
var badArr = ["You suck", "Give up on life", "Do you even internet?", "What a moron"];
var goodArr = ["You're great!", "You're incredible! Good Job!", "You're amazing!", " Fantastic job!"];

var handleRequestGood = function(req, res) {
  var rand = Math.floor((Math.random() * 4));
  res.end(goodArr[rand]);
}

var handleRequestBad = function(req, res) {
  var rand = Math.floor((Math.random() * 4));
  res.end(badArr[rand]);
}

var serverGood = http.createServer(handleRequestGood);
var serverBad = http.createServer(handleRequestBad);

serverGood.listen(GOODPORT, function() {
  console.log("Server is listening at http://localhost:%s", GOODPORT);
});
serverBad.listen(BADPORT, function() {
  console.log("Server is listening at http://localhost:%s", BADPORT);
});
