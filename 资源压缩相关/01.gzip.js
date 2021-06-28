// 压缩文件

var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var inFile = fs.createReadStream('./assets/demo1.txt');
var out = fs.createWriteStream('./assets/demo1.txt.gz');
inFile.pipe(gzip).pipe(out);