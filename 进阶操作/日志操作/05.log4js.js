var express = require('express');
var log4js = require('log4js');
var app = express();
log4js.configure({
  // appenders: [
  //   { type: 'console', category: 'app' }
  // ]
  appenders: {
    fileout: { type: "file", filename: "fileout.log" },
    datafileout: {
      type: "colored",
      filename: "datafileout.log",
      pattern: ".yyyy-MM-dd-hh-mm-ss-SSS"
    },
    consoleout: { type: "console" },
  },
  categories: {
    default: { appenders: ["fileout", "consoleout"], level: "debug" },
    anything: { appenders: ["consoleout"], level: "debug" }
  }
});
var logger = log4js.getLogger('app');
logger.level = 'INFO'
// logger.setLevel('INFO');  // 级别 > INFO 的日志才会被打印
app.use(log4js.connectLogger(logger));
app.use(function (req, res, next) {
  res.send('ok');
});
app.listen(3000, function () {
  console.log('listen on 3000')
});