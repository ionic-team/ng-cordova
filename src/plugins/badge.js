// install  :     cordova plugin add de.appplant.cordova.plugin.badge
// link     :     https://github.com/katzer/cordova-plugin-badge

angular.module('ngCordova.plugins.badge', [])

  .factory('$cordovaBadge', ['$q', 'cordovaReady', function ($q, cordovaReady) {

    return {
      hasPermission: cordovaReady(function () {
        var q = $q.defer();

        cordova.plugins.notification.badge.hasPermission(function (permission) {
          if (permission) {
            q.resolve(true);
          }
          else {
            q.reject("You do not have permission");
          }
        });

        return q.promise;
      }),

      promptForPermission: cordovaReady(function () {
        return cordova.plugins.notification.badge.promptForPermission();
      }),

      set: cordovaReady(function (number) {
        var q = $q.defer();

        cordova.plugins.notification.badge.hasPermission(function (permission) {
          if (permission) {
            q.resolve(cordova.plugins.notification.badge.set(number));
          }
          else {
            q.reject("You do not have permission to set Badge");
          }
        });
        return q.promise;
      }),

      get: cordovaReady(function () {
        var q = $q.defer();
        cordova.plugins.notification.badge.hasPermission(function (permission) {
          if (permission) {
            cordova.plugins.notification.badge.get(function (badge) {
              q.resolve(badge);
            });
          } else {
            q.reject("You do not have permission to get Badge");
          }
        });

        return q.promise;
      }),

      clear: cordovaReady(function () {
        var q = $q.defer();

        cordova.plugins.notification.badge.hasPermission(function (permission) {
          if (permission) {
            q.resolve(cordova.plugins.notification.badge.clear());
          }
          else {
            q.reject("You do not have permission to clear Badge");
          }
        });
        return q.promise;
      }),

      configure: cordovaReady(function (config) {
        return cordova.plugins.notification.badge.configure(config);
      })
    };
  }]);
