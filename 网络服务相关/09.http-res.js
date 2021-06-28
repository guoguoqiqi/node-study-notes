var http = require('http');
// 设置状态码、状态描述信息、响应主体
var server = http.createServer(function (req, res) {
  res.writeHead(200, 'ok', {
    'Content-Type': 'text/plain'
  });
  res.end('hello');
});
server.listen(3000, function () {
  console.log('listen on 3000')
});

// res.writeHead(200, 'ok'); 
// ||
// res.statusCode = 200;
// res.statusMessage = 'ok';


/**
 *res提供了 res.writeHead()、response.setHeader() 来实现响应头部的设置。

  方法一
  res.writeHead(200, 'ok', {
    'Content-Type': 'text-plain'
  });
  ||
  方法二
  res.setHeader('Content-Type', 'text-plain');


  // 增
  res.setHeader('Content-Type', 'text/plain');
  // 删
  res.removeHeader('Content-Type');
  // 改
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');  // 覆盖
  // 查
  res.getHeader('content-type');
 *
 */


