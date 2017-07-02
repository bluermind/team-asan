var google = require('googleapis');
var fs = require('fs');

function fileDownload(auth, fileName, fileid) {
    var service = google.drive('v3');
    var path = '/googleDriveTest/' + fileName;
    var dest = fs.createWriteStream(path);
    service.files.get({
        fileId: fileid,
        alt: 'media',
        auth: auth
    })
    .on('end', function() {
        console.log('Done');
    })
    .on('error', function(err) {
        console.log('Error during download', err);
    })
    .pipe(dest);
}
// Error: The user has not granted the app 1026177886151 read access to the file 0B5QkjeF3KHxWYnB6V1JOTVgxa1k
exports.fileDownload = fileDownload;