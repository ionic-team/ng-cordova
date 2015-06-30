System.register('ng-cordova/batteryStatus', [], function (_export) {
  //  install   :   cordova plugin add cordova-plugin-battery-status
  //  link      :   https://github.com/apache/cordova-plugin-battery-status

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.batteryStatus', []).factory('$cordovaBatteryStatus', ['$rootScope', '$window', '$timeout', function ($rootScope, $window, $timeout) {

        var batteryStatus = function batteryStatus(status) {
          $timeout(function () {
            $rootScope.$broadcast('$cordovaBatteryStatus:status', status);
          });
        };

        var batteryCritical = function batteryCritical(status) {
          $timeout(function () {
            $rootScope.$broadcast('$cordovaBatteryStatus:critical', status);
          });
        };

        var batteryLow = function batteryLow(status) {
          $timeout(function () {
            $rootScope.$broadcast('$cordovaBatteryStatus:low', status);
          });
        };

        document.addEventListener('deviceready', function () {
          if (navigator.battery) {
            $window.addEventListener('batterystatus', batteryStatus, false);
            $window.addEventListener('batterycritical', batteryCritical, false);
            $window.addEventListener('batterylow', batteryLow, false);
          }
        }, false);
        return true;
      }]).run(['$cordovaBatteryStatus', function ($cordovaBatteryStatus) {}]);
    }
  };
});