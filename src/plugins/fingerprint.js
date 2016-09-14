// install   :      cordova plugin add https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio
// link      :      https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio

/* globals fingerprint: true */
angular.module('ngCordova.plugins.fingerprint', [])

  .factory('$cordovaFingerprint', ['$q', function ($q) {

    return {
      isAvailable: function () {
        var defer = $q.defer();
        if (!window.cordova) {
          defer.reject('Not supported without cordova.js');
        } else {
          fingerprint.isAvailable(function (value) {
            defer.resolve(value);
          }, function (err) {
            defer.reject(err);
          });
        }

        return defer.promise;
      },

      show: function (options) {
        var defer = $q.defer();
        if (!window.cordova) {
          defer.reject('Not supported without cordova.js');
        } else {
          fingerprint.show(options,
          function (value) {
            defer.resolve(value);
          }, function (err) {
            defer.reject(err);
          });
        }

        return defer.promise;
      }
    };
  }]);
