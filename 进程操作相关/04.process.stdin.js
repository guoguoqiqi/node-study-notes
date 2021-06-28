// process.stdin、process.stdout、process.stderr 分别代表进程的标准输入、标准输出、标准错误输出

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('end');
});