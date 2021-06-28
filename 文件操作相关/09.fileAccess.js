var fs = require('fs');
// fs.access('../files/demo10.txt', function (err) {
//   if (err) throw err;
//   console.log('demo10.txt存在');
// });

fs.access('../files/demo5.txt', function (err) {
  if (err) throw err;
  console.log('demo5.txt存在');
});
