console.log('Starting directory: ' + process.cwd());
try {
  process.chdir('D:/新建文件夹/demo04/hello-react/node-road');
  console.log('New directory: ' + process.cwd());
}
catch (err) {
  console.log('chdir: ' + err);
}