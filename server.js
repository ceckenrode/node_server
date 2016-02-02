var http = require('http');
var fs = require('fs');
var url = require('url');
var PORT = 8080;

var handleRequest = function(req, res) {
  console.log('req.url', req.url);
  var url_parts = url.parse(req.url);
  switch (url_parts.pathname) {
    case '/':
      display_page("home.html", req, res);
      break;
    case '/home':
      display_page("home.html", req, res);
      break;
    case '/favorite_food':
      display_page("favorite_food.html", req, res);
      break;
    case '/css':
      display_page("css.html", req, res);
      break;
    case '/favorite_movies':
      display_page("favorite_movies.html", req, res);
      break;
    default:
      display_page("404.html", req, res);
      break;
  };
};

var server = http.createServer(handleRequest);
server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT);
});

var display_page = function(page, req, res) {
  fs.readFile(page, function(err, data) {
    if (err) {
      return console.error(err);
    }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(data);
  });
}
