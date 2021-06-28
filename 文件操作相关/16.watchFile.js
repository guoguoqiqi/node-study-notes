var fs = require('fs');
var options = {
  persistent: true,  // 默认就是true
  interval: 1000  // 多久检查一次
};
// curr, prev 是被监听文件的状态, fs.Stat实例
// 可以通过 fs.unwatch() 移除监听
fs.watchFile('./files/demo66.txt', options, function (curr, prev) {
  console.log('修改时间为: ' + curr.mtime);
});