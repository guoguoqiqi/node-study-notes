var fs = require('fs');
fs.open('../files/demo6.txt', 'a', function (err, fd) {
  if (err) {
    throw err;
  }
  var data = '123123123 hello world';
  fs.write(fd, data, 0, 'utf-8', function (err, written, string) {
    if (err) {
      throw err;
    }
    console.log(written);
    console.log(string);

    fs.close(fd, function (err) {
      if (err) {
        throw err;
      }
      console.log('file closed');
    })
  })
})