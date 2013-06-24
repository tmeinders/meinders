var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  if (request.headers.host === 'www.meinde.rs')
  {
    response.redirect(302,'http://www.meinders.com/test2.html');
  }
  else
  {
  fs.readFile('./index.html', function(error, content) {
    if (error) {
      response.writeHead(500);
      response.end();
    }
    else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(content, 'utf-8');
    }
  });


  fs.readFile('./test2.html', function(error, content) {
    if (error) {
      response.writeHead(500);
      response.end();
    }
    else {
      response.send('you are using the shortener 2');
    }
  });
    //response.send('Hello World2!');
  }
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
