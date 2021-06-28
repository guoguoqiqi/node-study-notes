var fs = require('fs');
try {
  fs.renameSync('../files/demo5.txt', '../files/demo55.txt')
  console.log('rename complete')
} catch (error) {
  console.log(error)
}