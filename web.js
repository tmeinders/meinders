var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(request, response) {
  console.log('host: ' + request.headers.host);
  console.log('/ is executing');
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


  //response.send('Hello World2!');
});


app.get('/resume', function(request, response) {
  console.log('host: ' + request.headers.host);
  console.log('/ is executing');
  fs.readFile('./TravisMeindersResume.pdf', function(error, content) {
    if (error) {
      response.writeHead(500);
      response.end();
    }
    else {
      response.writeHead(200, { 'Content-Type': 'application/pdf' });
      response.end(content);
    }
  });
});




app.get('/test2.html', function(request, response) {
  response.send('you are using the shortener 2');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
