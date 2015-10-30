// install  :     cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-googleplus.git
// link     :     https://github.com/EddyVerbruggen/cordova-plugin-googleplus

angular.module('ngCordova.plugins.googlePlus', [])

  .factory('$cordovaGooglePlus', ['$q', '$window', function ($q, $window) {

     return {
      login: function (options) {
        var q = $q.defer();

        if (options === undefined) {
          options = {'iOSApiKey': {}};
        }

        $window.plugins.googleplus.login(options, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });

        return q.promise;
      },

      silentLogin: function (options) {
        var q = $q.defer();

        if (options === undefined) {
          options = {'iOSApiKey': {}};
        }

        $window.plugins.googleplus.trySilentLogin(options, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });

        return q.promise;
      },

      logout: function () {
        var q = $q.defer();
        $window.plugins.googleplus.logout(function (response) {
          q.resolve(response);
        });
        return q.promise;
      },

      disconnect: function () {
        var q = $q.defer();
        $window.plugins.googleplus.disconnect(function (response) {
          q.resolve(response);
        });
        return q.promise;
      },

      isAvailable: function () {
        var q = $q.defer();
        $window.plugins.googleplus.isAvailable(function (available) {
          if (available) {
            q.resolve(available);
          } else {
            q.reject(available);
          }
        });

        return q.promise;
      }
    };

  }]);
