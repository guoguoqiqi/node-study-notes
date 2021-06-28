//导入对应模块
var http = require("http");
//获取路由和参数队列要用到的模块
var url = require("url");
//获取到单一参数要用到的模块
var querystring = require('querystring')
var server = http.createServer(function (req, res) {
  var urlObj = url.parse(req.url);
  var query = urlObj.query;
  var queryObj = querystring.parse(query);
  console.log(JSON.stringify(queryObj));
  res.end('ok');
});
server.listen(3000, function () {
  console.log('listen on 3000')
});