// 查询域名 www.qq.com 对应的ip
var dns = require('dns');
dns.lookup('www.qq.com', function(err, address, family){
    if(err) throw err;
    console.log('例子A: ' + address);
});


// 同一个域名，可能对应多个不同的ip
var dns = require('dns');
var options = {all: true};
dns.lookup('www.qq.com', options, function(err, address, family){
    if(err) throw err;
    console.log('例子B: ' + JSON.stringify(address));
});