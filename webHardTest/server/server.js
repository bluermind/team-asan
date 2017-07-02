'use strict';

var fileChk = require('./fileChk');
var process = require('process');
var loopback = require('loopback');
var boot = require('loopback-boot');
var app = module.exports = loopback();
var quickstart = require('../quickstart.js');
var googleApi = require('./googleApi.js');

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');

   // 로컬 디렉토리 감시/
   // fileChk.watch();

   // google drive api 통신
  quickstart.googleGod();


   var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};
// 모듈을 만들고 server.js 에서 실행
// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
