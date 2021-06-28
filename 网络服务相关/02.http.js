var http = require('http');

// 请求服务端
var client = http.get('http://127.0.0.1:3000', function(clientRes){
  console.log(process.stdout)
  clientRes.pipe(process.stdout);
});