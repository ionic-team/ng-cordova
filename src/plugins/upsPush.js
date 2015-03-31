// install   :      cordova plugin add https://github.com/aerogear/aerogear-cordova-push.git
// link      :      https://github.com/aerogear/aerogear-cordova-push

angular.module('ngCordova.plugins.upsPush', [])

  .factory('$cordovaUpsPush', ['$q', '$window', '$rootScope', '$timeout', function ($q, $window, $rootScope, $timeout) {
    return {
      onNotification: function (notification) {
        $timeout(function () {
          $rootScope.$broadcast('$cordovaUpsPush:notificationReceived', notification);
        });
      },

      register: function (config) {
        var q = $q.defer();
        var injector, notificationCallback;
        if (config !== undefined && config.ecb === undefined) {
          if (document.querySelector('[ng-app]') === null) {
            injector = "document.body";
          }
          else {
            injector = "document.querySelector('[ng-app]')";
          }
          notificationCallback = "angular.element(" + injector + ").injector().get('$cordovaUpsPush').onNotification";
        }

        $window.push.register(notificationCallback, function () {
          q.resolve();
        }, function (error) {
          q.reject(error);
        }, config);

        return q.promise;
      },

      unregister: function (options) {
        var q = $q.defer();
        $window.push.unregister(function () {
          q.resolve();
        }, function (error) {
          q.reject(error);
        }, options);

        return q.promise;
      },

      // iOS only
      setBadgeNumber: function (number) {
        var q = $q.defer();
        $window.push.setApplicationIconBadgeNumber(function () {
          q.resolve();
        }, number);
        return q.promise;
      }
    };
  }]);
