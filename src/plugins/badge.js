// install  :     cordova plugin add https://github.com/katzer/cordova-plugin-badge.git
// link     :     https://github.com/katzer/cordova-plugin-badge

angular.module('ngCordova.plugins.badge', [])

  .factory('$cordovaBadge', ['$q', function ($q) {

    return {
      hasPermission: function () {
        var q = $q.defer();
        cordova.plugins.notification.badge.hasPermission(function (permission) {
          if (permission) {
            q.resolve(true);
          } else {
            q.reject('You do not have permission');
          }
        });

        return q.promise;
      },

      promptForPermission: function () {
        return cordova.plugins.notification.badge.promptForPermission();
      },

      set: function (badge, callback, scope) {
        var q = $q.defer();

        cordova.plugins.notification.badge.hasPermission(function (permission) {
          if (permission) {
            q.resolve(
              cordova.plugins.notification.badge.set(badge, callback, scope)
            );
          } else {
            q.reject('You do not have permission to set Badge');
          }
        });
        return q.promise;
      },

      get: function () {
        var q = $q.defer();
        cordova.plugins.notification.badge.hasPermission(function (permission) {
          if (permission) {
            cordova.plugins.notification.badge.get(function (badge) {
              q.resolve(badge);
            });
          } else {
            q.reject('You do not have permission to get Badge');
          }
        });

        return q.promise;
      },

      clear: function (callback, scope) {
        var q = $q.defer();

        cordova.plugins.notification.badge.hasPermission(function (permission) {
          if (permission) {
            q.resolve(cordova.plugins.notification.badge.clear(callback, scope));
          } else {
            q.reject('You do not have permission to clear Badge');
          }
        });
        return q.promise;
      },

      increase: function (count, callback, scope) {
        var q = $q.defer();

        this.hasPermission().then(function (){
          q.resolve(
            cordova.plugins.notification.badge.increase(count, callback, scope)
          );
        }, function (){
          q.reject('You do not have permission to increase Badge');
        }) ;

        return q.promise;
      },

      decrease: function (count, callback, scope) {
        var q = $q.defer();

        this.hasPermission().then(function (){
          q.resolve(
            cordova.plugins.notification.badge.decrease(count, callback, scope)
          );
        }, function (){
          q.reject('You do not have permission to decrease Badge');
        }) ;

        return q.promise;
      },

      configure: function (config) {
        return cordova.plugins.notification.badge.configure(config);
      }
    };
  }]);
