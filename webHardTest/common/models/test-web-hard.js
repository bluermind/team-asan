'use strict';

module.exports = function(testWebHard) {
   
              // 응답 객체 선언
    // function time() {
    //     var curTime  = new Date();
    //     curTime.toLocaleString();
    //     if(testWebHard.status) {
    //         response += curTime;
    //     }
    // } // 1초마다 주기적으로 이벤트 발생 체크
    //  setTimeout(time(), "1000");
  testWebHard.getname = function(shopid, cb) {
      testWebHard.findById( shopid, function (err, instance) {
          var response;
          response = "Name of coffee shop is " + instance.name;
          cb(null, response);
          console.log(response);
      });
  }; // getName() end
  testWebHard.status = function(cb) {
      var currentDate = new Date();
      var currentHour = currentDate.getHours();
      var OPEN_HOUR = 6;
      var CLOSE_HOUR = 20;
      console.log('Current hour is ' + currentHour);

      var response; 
      if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
          response = 'We are open for business.';
      } else {
          response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
      }
      cb(null, response);
  }; // status() end 

      // 현재 시간, 디지털로 띄우기
    // 1분 지날 때 마다 콘솔창에 알림
  testWebHard.remoteMethod(
      'status',
      {
          http: {path: '/status', verb: 'get'},
          returns: {arg: 'status', type: 'string'}
      }
  );
  testWebHard.remoteMethod(
    'getname',
          {
              http: {path: '/getname', verb:'get' },
              accepts: {arg: 'id', type: 'number', http: {source: 'query' } },
             returns: {arg: 'name', type: 'string'}
         }
  );
};
