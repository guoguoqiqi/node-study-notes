var fs = require('fs');
fs.readFile('../files/demo1.txt', 'utf8', function (err, data) {
  if (err) {
    return console.error('读取文件出错: ' + err.message);
  }
  console.log('文件内容: ' + data);
});