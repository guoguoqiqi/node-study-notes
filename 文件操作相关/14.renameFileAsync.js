// fs.rename(oldPath, newPath, callback)
var fs = require('fs');
fs.rename('../files/demo6.txt', '../files/demo66.txt', function (err) {
  if (err) throw err;
  console.log('重命名成功');
});