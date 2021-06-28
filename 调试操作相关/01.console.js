var fs = require('fs');
var file = fs.createWriteStream('./log/log01.txt');
var logger = new console.Console(file, file);
logger.log('hello');
logger.log('word');
// 备注：内容输出到 stdout.txt里，而不是打印到控制台