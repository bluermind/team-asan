         var fs = require('fs');

         function localFileList() {
         var fileList = [];
          var files = fs.readdirSync('/googleDriveTest');
          for(var i in files) {
            if (!files.hasOwnProperty(i)) countinue;
            var name = files[i];
            fileList.push({
                name: name
            });
          }
          return fileList;
         }
         
         exports.localFileList = localFileList;