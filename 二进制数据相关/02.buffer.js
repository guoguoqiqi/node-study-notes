// var buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
// console.log(buf.toString());

var buf = Buffer.from('this is a tést');  // 默认采用utf8
// 输出：this is a tést
console.log(buf.toString());  // 默认编码是utf8，所以正常打印
// 输出：this is a tC)st
console.log(buf.toString('ascii'));  // 转成字符串时，编码不是utf8，所以乱码