/**
 *  fs.open
 * 【mode详解】 http://nodejs.cn/api/fs.html#fs_fs_chmod_path_mode_callback
 * 【flags详解】http://nodejs.cn/api/fs.html#fs_file_system_flags
 */
/**
 * filename, 必选参数，文件名
 * flags, 操作标识，如"r",读方式打开
 * [mode],权限，如777，表示任何用户读写可执行
 * callback 打开文件后回调函数，参数默认第一个err,第二个fd为一个整数，表示打开文件返回的文件描述符，window中又称文件句柄
 */

var fs = require('fs');
fs.open('../files/demo5.txt', 'a', function (err, fd) {
  if (err) {
    throw err;
  }
  var data = '123123123 hello world';
  var buf = new Buffer(8);
  fs.write(fd, buf, 0, 8, 0, function (err, bytesWritten, buffer) {
    if (err) {
      throw err;
    }
    console.log(bytesWritten);
    console.log(buffer);

    fs.close(fd, function (err) {
      if (err) {
        throw err;
      }
      console.log('file closed');
    })
  })
})