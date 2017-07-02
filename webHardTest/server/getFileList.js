var google = require('googleapis');
var fileDown = require('./fileDown.js');
var boxApp = require('boxApi.js');
var printOSClient = require('printOSClient.js');
var request = require('request-promise');
var fs = require('fs');

function listFiles(auth, localFiles) {
  var service = google.drive('v3');
  service.files.list({
    q: "'0B5QkjeF3KHxWT2FzVXFFNFJSTGc' in parents",
    auth: auth,
    pageSize: 15,
    fields: "nextPageToken, files(id, name)"
  }, function (err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var files = response.files;
    if (files.length == 0) {
      console.log('No files found.');
    } else {
      console.log('Files:');
      var googleFiles = [];       // googleFileList
      for (var i = 0; i < files.length; i++) {
        var tempFile = files[i];
        var fileName = tempFile.name;

        // .pdf 문서만 골라오기
        if (fileName.endsWith('.pdf')) {
          googleFiles.push(
            {
              name: tempFile.name,
              id: tempFile.id
            }
          );
          console.log('%s (%s)', tempFile.name, tempFile.id);
          //  fileDown.fileDownload(auth, tempFile.name, tempFile.id);
        }
        //  0B5QkjeF3KHxWT2FzVXFFNFJSTGc
      }
      // localFiles 랑 googleFiles 랑 다른 파일 찾기
      // fileList 비교
      // console.log('localFiles: ' + localFiles);
      // console.log('googleFiles: ' + JSON.stringify(googleFiles));

      for (var i in googleFiles) {
        for (var j in localFiles) {
          if (googleFiles[i].name == localFiles[j].name) { // 동일한 파일이 있는 경우
            i++;
            break;
          }
          if (j == localFiles.length - 1) { // 없는 파일(새 파일)의 경우 로컬 디렉토리로 다운
            fileDown.fileDownload(auth, googleFiles[i].name, googleFiles[i].id);
            // BOX API 연동
            /* ***********************************************
           var baseUrl = 'https://stage.printos.api.hp.com/box';
           var mime_type = 'application/pdf';
           var box =  boxApp.BoxApi(, parseArgs());
           var url = box.getUploadUrls(baseUrl, mime_type).then(
             function(resp) {
               var inputPath = '/googleDriveTest/' + googleFiles[i].name;
               var inputFile = fs.createReadStream(inputPath);
               // var output = fs.createWriteStream(resp.url);
               const options = {
                 name: googleFiles[i].name,
                 folderId: '6343af32c',
                 note: 'files for testing',
                 file: inputFile
               }
               $.ajax({
                 type: 'POST',
                 url: resp.url,
                 contentType: 'application/pdf',
                 data: options
               })
               .success(function() {
                 console.log('File upload complete');
               });
              sendRequest('post', resp.url, options, '?');
               
                
              }, function(err) {
                console.log('URL request falied: ' + err);
            });

            function sendRequest(method, path, payload, queryParams) {
                function responseHandler(error, response) {
                  if (error) {
                    reject(error);
                  } else {
                    resolve(response);
                  }
                }
                var request = superagent[method.toLowerCase()](baseUrl + path);
                request.set('Accept', "application/json");
                request.set('Cache-Control', "no-cache");

                var headers = createHeaders(method, path);
                Object.keys(headers).forEach(function(k) {
                  request.set(k, headers[k]);
                })

                request.proxyWrapper = function(proxy) {
                  if(proxy == undefined)  return this;
                  return this.proxy(proxy); 
                }

                return request.send(payload)
                        .query(queryParams)
                        .proxyWrapper(proxy)
                        .end(responesHandler);

            };
           // *********************************************** */
          }
        }
      }
    }
  });
}

exports.listFiles = listFiles;