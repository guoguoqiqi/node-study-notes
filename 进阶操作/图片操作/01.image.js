// 将图片转成datauri

var fs = require('fs');
var filepath = './logo.png';
var bData = fs.readFileSync(filepath);

console.log(bData)

var base64Str = bData.toString('base64');

console.log(base64Str)

var datauri = 'data:image/png;base64,' + base64Str;
console.log(datauri);

// fs.stat('./logo.png', function (err, stats) {
//   console.log('文件信息: ' + JSON.stringify(stats, null, 2))
//   console.log('文件大小: ' + stats.size);
//   console.log('创建时间: ' + getTimeDesc(stats.birthtime));
//   console.log('访问时间: ' + getTimeDesc(stats.atime));
//   console.log('修改时间: ' + getTimeDesc(stats.mtime));
// });

// var getTimeDesc = function (d) {
//   return [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-') + ' ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
// };