var http = require('http');
var querystring = require('querystring');

var options = {
  method: 'POST',
  protocol: 'http:',
  hostname: '127.0.0.1',
  port: '3000',
  path: '/',
  headers: {
    "connection": "keep-alive",
    "content-type": "application/x-www-form-urlencoded"
  }
};
var postBody = {
  nick: 'chyingp'
};
var client = http.request(options, function (res) {
  res.pipe(process.stdout);
});
client.write(querystring.stringify(postBody));
client.end();

http.request()