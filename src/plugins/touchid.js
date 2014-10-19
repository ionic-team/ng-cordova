// install   :      cordova plugin add https://github.com/leecrossley/cordova-plugin-touchid.git
// link      :      https://github.com/leecrossley/cordova-plugin-touchid

angular.module('ngCordova.plugins.touchid', [])

  .factory('$cordovaTouchID', ['$q', '$cordova', function ($q, $cordova) {

    return {
      checkSupport: function () {
        var defer = $q.defer();
        if (!window.cordova) {
          defer.reject("Not supported without cordova.js");
        } else {
          $cordova.ready().then(function () {
            touchid.checkSupport(function (value) {
              defer.resolve(value);
            }, function (err) {
              defer.reject(err);
            });
          });
        }

        return defer.promise;
      },

      authenticate: function (auth_reason_text) {
        var defer = $q.defer();
        if (!window.cordova) {
          defer.reject("Not supported without cordova.js");
        } else {
          $cordova.ready().then(function () {
            touchid.authenticate(function (value) {
              defer.resolve(value);
            }, function (err) {
              defer.reject(err);
            }, auth_reason_text);
          });
        }

        return defer.promise;
      }
    }
  }]);
