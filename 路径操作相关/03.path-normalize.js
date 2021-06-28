// 如果路径为空，返回.，相当于当前的工作路径。
// 将对路径中重复的路径分隔符（比如linux下的/)合并为一个。
// 对路径中的.、..进行处理。（类似于shell里的cd ..）
// 如果路径最后有/，那么保留该/。
var path = require('path');
var filepath = '../files/demo66.txt';
var index = 0;
var compare = function (desc, callback) {
  console.log('[用例%d]：%s', ++index, desc);
  callback();
  console.log('\n');
};
compare('路径为空', function () {
  // 输出 .
  console.log(path.normalize(''));
});

compare('路径结尾是否带/', function () {
  // 输出 ..\files
  console.log(path.normalize('../files'));
  // ..\files\
  console.log(path.normalize('../files/'));
});

compare('重复的/', function () {
  // 输出 ..\files\
  console.log(path.normalize('..//files/'));
});

compare('路径带..', function () {
  // 输出 ..\files
  console.log(path.normalize('../files/.'));
});

compare('相对路径', function () {
  // 输出 ..\files\
  console.log(path.normalize('../files/'));
  // 输出 files\
  console.log(path.normalize('files/'));
});

compare('不常用边界', function () {
  // 输出 ..
  console.log(path.normalize('./..'));
  // 输出 ..
  console.log(path.normalize('..'));
  // 输出 ..\
  console.log(path.normalize('../'));
  // 输出 \
  console.log(path.normalize('/../'));
  // 输出 \
  console.log(path.normalize('/..'));
});