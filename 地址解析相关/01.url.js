// url模块三个方法分别是：

// .parse(urlString) ：将url字符串，解析成object，便于开发者进行操作。
// .format(urlObj) ：.parse() 方法的反向操作。
// .resove(from, to) ：以from作为起始地址，解析出完整的目标地址（从哪来，到哪去，得到一个最终结果地址）

// parse(url,parseQueryString,slashesDenoteHos)

// parseQueryString 是否decode
// slashesDenoteHos（默认为false）如果为true，那么类似//foo/bar里的foo就会被认为是hostname；如果为false，则foo被认为是pathname的一部分。

const { parse } = require('path');
var url = require('url');
var str = 'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1';
// var obj = url.parse(str);
var obj = url.parse(str, true);
console.log(obj);