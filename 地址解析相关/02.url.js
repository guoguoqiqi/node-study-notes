var url = require('url');
var str = '//foo/bar';
var obj = url.parse(str, true, false);
console.log(obj);
obj = url.parse(str, true, true);
console.log(obj);