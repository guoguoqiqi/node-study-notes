var fs = require('fs');
try {
  fs.mkdirSync('../assets5');
  console.log('创建目录成功');
} catch (e) {
  throw e;
}