const http = require('http')

const server = http.createServer()

server.on('request', function (req, res) {
  res.writeHead(200, 'ok', {
    'Content-Type': 'text/plain;charset=utf-8'
  })
  res.write('成功')
  res.end()
})

server.listen(3000, function () {
  console.log('listen on 3000')
});

// response.write(chunk[, encoding][, callback])