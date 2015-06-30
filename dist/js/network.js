System.register('ng-cordova/network', [], function (_export) {
  // install   :      cordova plugin add cordova-plugin-network-information
  // link      :      https://github.com/apache/cordova-plugin-network-information

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.network', []).factory('$cordovaNetwork', ['$rootScope', '$timeout', function ($rootScope, $timeout) {

        var offlineEvent = function offlineEvent() {
          var networkState = navigator.connection.type;
          $timeout(function () {
            $rootScope.$broadcast('$cordovaNetwork:offline', networkState);
          });
        };

        var onlineEvent = function onlineEvent() {
          var networkState = navigator.connection.type;
          $timeout(function () {
            $rootScope.$broadcast('$cordovaNetwork:online', networkState);
          });
        };

        document.addEventListener('deviceready', function () {
          if (navigator.connection) {
            document.addEventListener('offline', offlineEvent, false);
            document.addEventListener('online', onlineEvent, false);
          }
        });

        return {
          getNetwork: function getNetwork() {
            return navigator.connection.type;
          },

          isOnline: function isOnline() {
            var networkState = navigator.connection.type;
            return networkState !== Connection.UNKNOWN && networkState !== Connection.NONE;
          },

          isOffline: function isOffline() {
            var networkState = navigator.connection.type;
            return networkState === Connection.UNKNOWN || networkState === Connection.NONE;
          },

          clearOfflineWatch: function clearOfflineWatch() {
            document.removeEventListener('offline', offlineEvent);
            $rootScope.$$listeners['$cordovaNetwork:offline'] = [];
          },

          clearOnlineWatch: function clearOnlineWatch() {
            document.removeEventListener('online', onlineEvent);
            $rootScope.$$listeners['$cordovaNetwork:online'] = [];
          }
        };
      }]).run(['$cordovaNetwork', function ($cordovaNetwork) {}]);
    }
  };
});