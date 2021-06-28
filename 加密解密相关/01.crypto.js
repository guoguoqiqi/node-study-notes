const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
  .update('I love cupcakes') // 生成加密的数据
  .digest('hex'); // 生成计算后的哈希
console.log(hash);