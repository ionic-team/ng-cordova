// install   :      cordova plugin add https://github.com/aharris88/phonegap-sms-plugin.git
// link      :      https://github.com/aharris88/phonegap-sms-plugin

angular.module('ngCordova.plugins.sms', [])

  .factory('$cordovaSms', ['$q', '$cordova', function ($q, $cordova) {

    return {
      send: function (number, message, intent) {
        var q = $q.defer();
        $cordova.ready().then(function () {
          sms.send(number, message, intent, function (res) {
            q.resolve(res);
          }, function (err) {
            q.reject(err)
          });
        });

        return q.promise;
      }
    }
  }]);
