// install   :  cordova plugin add de.appplant.cordova.plugin.local-notification
// link      :  https://github.com/katzer/cordova-plugin-local-notifications/

angular.module('ngCordova.plugins.localNotification', [])

  .factory('$cordovaLocalNotification', ['$q', '$window', '$rootScope', '$timeout', function ($q, $window, $rootScope, $timeout) {
    document.addEventListener("deviceready", function () {
      if ($window.plugin && $window.plugin.notification) {
        $window.plugin.notification.local.oncancel = function (id, state, json) {
          var notification = {
            id: id,
            state: state,
            json: json
          };
          $timeout(function () {
            $rootScope.$broadcast("$cordovaLocalNotification:canceled", notification);
          });
        };

        $window.plugin.notification.local.onclick = function (id, state, json) {
          var notification = {
            id: id,
            state: state,
            json: json
          };
          $timeout(function () {
            $rootScope.$broadcast("$cordovaLocalNotification:clicked", notification);
          });
        };

        $window.plugin.notification.local.ontrigger = function (id, state, json) {
          var notification = {
            id: id,
            state: state,
            json: json
          };
          $timeout(function () {
            $rootScope.$broadcast("$cordovaLocalNotification:triggered", notification);
          });
        };

        $window.plugin.notification.local.onadd = function (id, state, json) {
          var notification = {
            id: id,
            state: state,
            json: json
          };
          $timeout(function () {
            $rootScope.$broadcast("$cordovaLocalNotification:added", notification);
          });
        };
      }
    }, false);
    return {
      add: function (options, scope) {
        var q = $q.defer();
        scope = scope || null;
        $window.plugin.notification.local.add(options, function (result) {
          q.resolve(result);
        }, scope);
        return q.promise;
      },

      cancel: function (id, scope) {
        var q = $q.defer();
        scope = scope || null;
        $window.plugin.notification.local.cancel(id, function (result) {
          q.resolve(result);
        }, scope);
        return q.promise;
      },

      cancelAll: function (scope) {
        var q = $q.defer();
        scope = scope || null;
        $window.plugin.notification.local.cancelAll(function (result) {
          q.resolve(result);
        }, scope);
        return q.promise;
      },

      isScheduled: function (id, scope) {
        var q = $q.defer();
        scope = scope || null;
        $window.plugin.notification.local.isScheduled(id, function (result) {
          q.resolve(result);
        }, scope);

        return q.promise;
      },

      hasPermission: function (scope) {
        var q = $q.defer();
        $window.plugin.notification.local.hasPermission(function (result) {
          result ? q.resolve(result) : q.reject(result);
        }, scope);
        return q.promise;
      },

      promptForPermission: function () {
        var q = $q.defer();
        $window.plugin.notification.local.promptForPermission(function (result) {
          result ? q.resolve(result) : q.reject(result);
        });
        return q.promise;
      },

      registerPermission: function () {
        var q = $q.defer();
        $window.plugin.notification.local.registerPermission(function (result) {
          result ? q.resolve(result) : q.reject(result);
        });
        return q.promise;
      },

      getScheduledIds: function (scope) {
        var q = $q.defer();
        $window.plugin.notification.local.getScheduledIds(function (result) {
          q.resolve(result);
        }, scope);
        return q.promise;
      },

      isTriggered: function (id, scope) {
        var q = $q.defer();
        $window.plugin.notification.local.isTriggered(id, function (result) {
          q.resolve(result);
        }, scope);
        return q.promise;
      },

      getTriggeredIds: function (scope) {
        var q = $q.defer();
        $window.plugin.notification.local.getTriggeredIds(function (result) {
          q.resolve(result);
        }, scope);
        return q.promise;
      },

      getDefaults: function () {
        return $window.plugin.notification.local.getDefaults();
      },

      setDefaults: function (Object) {
        $window.plugin.notification.local.setDefaults(Object);
      }
    };
  }]);
