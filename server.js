var http = require('http');
var fs = require('fs');
var url = require('url');
var PORT = 8080;

var handleRequest = function(req, res) {
  console.log('req.url', req.url);
  var url_parts = url.parse(req.url);
  switch (url_parts.pathname) {
    case '/':
      display_root(req, res);
      break;
    case '/home':
      display_root(req, res);
      break;
    case '/favorite_food':
      display_food(req, res);
      break;
    case '/css':
      display_css(req, res);
      break;
    case '/favorite_movies':
      display_movies(req, res);
      break;
    default:
      display_404(req, res);
      break;
  };
};

var server = http.createServer(handleRequest);
server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT);
});

var display_root = function(req, res) {
  fs.readFile('home.html', function(err, data) {
    if (err) {
      return console.error(err);
    }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(data);
  });
}

var display_food = function(req, res) {
  fs.readFile('favorite_food.html', function(err, data) {
    if (err) {
      return console.error(err);
    }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(data);
  });
}

var display_css = function(req, res) {
  fs.readFile('css.html', function(err, data) {
    if (err) {
      return console.error(err);
    }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(data);
  });
}

var display_movies = function(req, res) {
  fs.readFile('favorite_movies.html', function(err, data) {
    if (err) {
      return console.error(err);
    }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(data);
  });
}

var display_404 = function(req, res) {
  fs.readFile('404.html', function(err, data) {
    if (err) {
      return console.error(err);
    }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(data);
  });
}
