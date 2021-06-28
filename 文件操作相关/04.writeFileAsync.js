var fs = require('fs');
fs.writeFile('../files/demo2.txt', 'hello world', 'utf8', function (err) {
  if (err) throw err;
  console.log('文件写入成功');
});