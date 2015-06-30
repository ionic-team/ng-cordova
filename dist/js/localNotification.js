System.register('ng-cordova/localNotification', [], function (_export) {
  // install   :  cordova plugin add https://github.com/katzer/cordova-plugin-local-notifications.git
  // link      :  https://github.com/katzer/cordova-plugin-local-notifications

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.localNotification', []).factory('$cordovaLocalNotification', ['$q', '$window', '$rootScope', '$timeout', function ($q, $window, $rootScope, $timeout) {
        document.addEventListener('deviceready', function () {
          if ($window.cordova && $window.cordova.plugins && $window.cordova.plugins.notification && $window.cordova.plugins.notification.local) {
            // ----- "Scheduling" events

            // A local notification was scheduled
            $window.cordova.plugins.notification.local.on('schedule', function (notification, state) {
              $timeout(function () {
                $rootScope.$broadcast('$cordovaLocalNotification:schedule', notification, state);
              });
            });

            // A local notification was triggered
            $window.cordova.plugins.notification.local.on('trigger', function (notification, state) {
              $timeout(function () {
                $rootScope.$broadcast('$cordovaLocalNotification:trigger', notification, state);
              });
            });

            // ----- "Update" events

            // A local notification was updated
            $window.cordova.plugins.notification.local.on('update', function (notification, state) {
              $timeout(function () {
                $rootScope.$broadcast('$cordovaLocalNotification:update', notification, state);
              });
            });

            // ----- "Clear" events

            // A local notification was cleared from the notification center
            $window.cordova.plugins.notification.local.on('clear', function (notification, state) {
              $timeout(function () {
                $rootScope.$broadcast('$cordovaLocalNotification:clear', notification, state);
              });
            });

            // All local notifications were cleared from the notification center
            $window.cordova.plugins.notification.local.on('clearall', function (state) {
              $timeout(function () {
                $rootScope.$broadcast('$cordovaLocalNotification:clearall', state);
              });
            });

            // ----- "Cancel" events

            // A local notification was cancelled
            $window.cordova.plugins.notification.local.on('cancel', function (notification, state) {
              $timeout(function () {
                $rootScope.$broadcast('$cordovaLocalNotification:cancel', notification, state);
              });
            });

            // All local notifications were cancelled
            $window.cordova.plugins.notification.local.on('cancelall', function (state) {
              $timeout(function () {
                $rootScope.$broadcast('$cordovaLocalNotification:cancelall', state);
              });
            });

            // ----- Other events

            // A local notification was clicked
            $window.cordova.plugins.notification.local.on('click', function (notification, state) {
              $timeout(function () {
                $rootScope.$broadcast('$cordovaLocalNotification:click', notification, state);
              });
            });
          }
        }, false);
        return {
          schedule: function schedule(options, scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.schedule(options, function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          add: function add(options, scope) {
            console.warn('Deprecated: use "schedule" instead.');

            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.schedule(options, function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          update: function update(options, scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.update(options, function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          clear: function clear(ids, scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.clear(ids, function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          clearAll: function clearAll(scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.clearAll(function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          cancel: function cancel(ids, scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.cancel(ids, function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          cancelAll: function cancelAll(scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.cancelAll(function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          isPresent: function isPresent(id, scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.isPresent(id, function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          isScheduled: function isScheduled(id, scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.isScheduled(id, function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          isTriggered: function isTriggered(id, scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.isTriggered(id, function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          hasPermission: function hasPermission(scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.hasPermission(function (result) {
              if (result) {
                q.resolve(result);
              } else {
                q.reject(result);
              }
            }, scope);

            return q.promise;
          },

          registerPermission: function registerPermission(scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.registerPermission(function (result) {
              if (result) {
                q.resolve(result);
              } else {
                q.reject(result);
              }
            }, scope);

            return q.promise;
          },

          promptForPermission: function promptForPermission(scope) {
            console.warn('Deprecated: use "registerPermission" instead.');

            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.registerPermission(function (result) {
              if (result) {
                q.resolve(result);
              } else {
                q.reject(result);
              }
            }, scope);

            return q.promise;
          },

          getAllIds: function getAllIds(scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.getAllIds(function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          getIds: function getIds(scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.getIds(function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          getScheduledIds: function getScheduledIds(scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.getScheduledIds(function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          getTriggeredIds: function getTriggeredIds(scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.getTriggeredIds(function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          get: function get(ids, scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.get(ids, function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          getAll: function getAll(scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.getAll(function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          getScheduled: function getScheduled(ids, scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.getScheduled(ids, function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          getAllScheduled: function getAllScheduled(scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.getAllScheduled(function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          getTriggered: function getTriggered(ids, scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.getTriggered(ids, function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          getAllTriggered: function getAllTriggered(scope) {
            var q = $q.defer();
            scope = scope || null;

            $window.cordova.plugins.notification.local.getAllTriggered(function (result) {
              q.resolve(result);
            }, scope);

            return q.promise;
          },

          getDefaults: function getDefaults() {
            return $window.cordova.plugins.notification.local.getDefaults();
          },

          setDefaults: function setDefaults(Object) {
            $window.cordova.plugins.notification.local.setDefaults(Object);
          }
        };
      }]);
    }
  };
});