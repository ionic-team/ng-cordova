angular.module('ngCordova.plugins.sms', [])

.factory('$cordovaSms', [function () {

    return {
      send: function (number, message, intent, cb) {
        sms.send(number, message, intent, function (res) {
          cb(null, res);
        }, function (err) {
          if(err) {
            cb(err);
          }
        });
      }
    }

}]);