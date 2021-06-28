var EventEmitter = require('events');
class Man extends EventEmitter { }
var man = new Man();
man.on('wakeup', function () {
  console.log('man has woken up');
});
man.emit('wakeup');
// 输出如下：
// man has woken up