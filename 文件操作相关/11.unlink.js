var fs = require('fs');
fs.unlink('../files/demo5.txt', function (err) {
  if (err) throw err;
  console.log('文件删除成功');
});