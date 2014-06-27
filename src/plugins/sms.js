angular.module('ngCordova.plugins.sms', [])

.factory('$cordovaSms', ['$q', function ($q) {

    return {
      send: function (number, message, intent, cb) {
        var q = $q.defer();
        sms.send(number, message, intent, function (res) {
          q.resolve(res);
        }, function (err) {
          q.reject(err)
        })
        return q.promise;
      }
    }

}]);