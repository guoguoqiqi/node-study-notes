// 可以看到，注册事件监听器前，事件先触发，则该事件会直接被忽略

var EventEmitter = require('events');
class Man extends EventEmitter { }
var man = new Man();
man.emit('wakeup', 1);
man.on('wakeup', function (index) {
  console.log('man has woken up ->' + index);
});
man.emit('wakeup', 2);
// 输出如下：
// man has woken up ->2