var http = require('http');
// http server 例子
var server = http.createServer(function (serverReq, serverRes) {
  var url = serverReq.url;
  // serverRes.setHeader('Content-Type','text/html; charset=utf-8'); 发送html格式的字符串
  serverRes.setHeader('Content-Type', 'text/plain; charset=utf-8'); // 发送普通文本
  serverRes.end('您访问的地址是：' + url);
});
server.listen(3000, function () {
  console.log('listen on 3000')
});