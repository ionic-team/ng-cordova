// install   :   cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid
// link      :   https://github.com/EddyVerbruggen/cordova-plugin-googleplus

/* globals $window.plugins.googleplus: true */
angular.module('ngCordova.plugins.google', [])

  .provider('$cordovaGoogle', [function () {

    this.$get = ['$q', '$window', function ($q, $window) {
      return {
        isAvailable: function () {
          var q = $q.defer();
          $window.plugins.googleplus.isAvailable(function(available) {
            if (available) {
              q.resolve(available);
            } else {
              q.reject(available);
            }
          });
          return q.promise;
        },

        login: function (data) {
          var q = $q.defer();
          $window.plugins.googleplus.login(data, function (obj) {
            q.resolve(obj);
          }, function (msg) {
            q.reject(msg);
          });

          return q.promise;
        },

        trySilentLogin: function (data) {
          var q = $q.defer();
          $window.plugins.googleplus.trySilentLogin(data, function (obj) {
            q.resolve(obj);
          }, function (msg) {
            q.reject(msg);
          });

          return q.promise;
        },

        logout: function () {
          var q = $q.defer();
          $window.plugins.googleplus.logout(function (res) {
            q.resolve(res);
          });
          return q.promise;
        },

        disconnect: function () {
          var q = $q.defer();
          $window.plugins.googleplus.disconnect(function (res) {
            q.resolve(res);
          });
          return q.promise;
        }
      };
    }];
  }]);
