// install   :      cordova plugin add https://github.com/leecrossley/cordova-plugin-touchid.git
// link      :      https://github.com/leecrossley/cordova-plugin-touchid

/* globals touchid: true */
angular.module('ngCordova.plugins.touchid', [])

  .factory('$cordovaTouchID', ['$q', function ($q) {

    return {
      checkSupport: function () {
        var defer = $q.defer();
        if (!window.cordova) {
          defer.reject('Not supported without cordova.js');
        } else {
          touchid.checkSupport(function (value) {
            defer.resolve(value);
          }, function (err) {
            defer.reject(err);
          });
        }

        return defer.promise;
      },

      authenticate: function (authReasonText) {
        var defer = $q.defer();
        if (!window.cordova) {
          defer.reject('Not supported without cordova.js');
        } else {
          touchid.authenticate(function (value) {
            defer.resolve(value);
          }, function (err) {
            defer.reject(err);
          }, authReasonText);
        }

        return defer.promise;
      }
    };
  }]);
