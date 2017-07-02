var cronJob = require('cron').CronJob;
var gfileList = require('./getFileList'); 
var lfileList = require('./localFiles');

function cronTest(auth) {
    var files;
new cronJob('*/10 * * * * *', function() {      // 10초 단위로 getFileList
    // google drive api 로 폴더변경 상태값 요청
   var localFiles =  lfileList.localFileList();
   gfileList.listFiles(auth, localFiles);
}, null, true, "Asia/Seoul");
}

exports.cronTest = cronTest;