// module.exports = function(app) {
//     app.dataSources.webHardDB.automigrate('testWebHard', function(err) {
//         if(err) throw err;
        
//         app.models.testWebHard.create([
//             {name: 'Bel Cafe', size: '500MB'},
//             {name: 'Three Bees Coffee House', size: '700MB'},
//             {name: 'Caffe Artigiano', size: '930MB'},
//         ], function(err, webHardDBs) {
//             if (err) throw err;

//             console.log('Models created: \n', webHardDBs);
//         });
//     });
// };