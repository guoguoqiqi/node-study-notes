var path = require('path');
console.log(path.basename('../files/demo66.txt'));
console.log(path.basename('../files/'));
console.log(path.basename('../files'));

// 严格意义上来说，path.basename(filepath) 只是输出路径的最后一部分，并不会判断是否文件名

// demo66.txt
// files
// files

// 如果只想获取文件名，单不包括文件扩展呢？可以用上第二个参数

// 输出：test
console.log(path.basename('../files/demo66.txt', '.txt'));