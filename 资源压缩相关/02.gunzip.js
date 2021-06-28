// 解压文件

var fs = require('fs');
var zlib = require('zlib');

var gunzip = zlib.createGunzip();

var inFile = fs.createReadStream('./assets/demo1.txt.gz');
var outFile = fs.createWriteStream('./assets2/demo1.txt');

inFile.pipe(gunzip).pipe(outFile);