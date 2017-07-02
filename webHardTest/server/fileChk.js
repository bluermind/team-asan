  // 디렉토리 상태 감시

  var fs = require('fs');
  var path = require('path');

    var flag = 0;
    function watch() {
    fs.watch('/fileTest', function (event, filename) {
      console.log('******************************');
      console.log('event: ' + event + ', filename :' + filename);
      console.log('event is: ' + event);
      console.log('******************************');
      if(filename) {
         var ext = path.extname(filename);   // 파일 확장자 추출
       //  if(event == "change" && ext == '.pdf' && !(filename.startsWith('checked_'))) { // 디렉토리 파일변경 발생, check파일 생성할 때 조건
         if(event == "change" && ext == '.pdf') {
          flag ++;
       //  if(flag == 2 && ext == '.pdf'  && !(filename.startsWith('checked_'))) { // check 파일 생성할 때 조건
         if(flag == 2 && ext == '.pdf') {
          var input = fs.createReadStream('/fileTest/' + filename);
         var output;
        
          //Repo 디렉토리에 파일 복사
          output = fs.createWriteStream('/fileRepo/' + filename);
          input.pipe(output);
      
          // .chk 파일 남기기
          // var originFile = filename.split('.');
          //  fs.writeFile('/fileTest/checked_' + originFile[0] + '.txt', filename + ' File Checked', function(err) {
          //  if(err) throw err;
          //   console.log('chk파일 남김 완료');
          //  });

          // 파일 삭제하기
          //  fs.unlink('/fileTest/' + filename, function(err) {
          //    if(err) throw err;
          //    console.log('파일 삭제 완료');
          //  });

         
          flag = 0;
          } // if (flag==2) end
        }
      }
    });
    }

    exports.watch = watch;