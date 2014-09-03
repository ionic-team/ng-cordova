//  install   :   cordova plugin add org.apache.cordova.battery-status
//  link      :   https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md

angular.module('ngCordova.plugins.battery-status', [])

  .factory('$cordovaBatteryStatus', [function () {
    return {
      onBatteryStatus: function (handler) {
        window.addEventListener('batterystatus', handler, false);
      },
      onBatteryCritical: function (handler) {
        window.addEventListener('batterycritical', handler, false);
      },
      onBatteryLow: function (handler) {
        window.addEventListener('batterylow', handler, false);
      }
    }
  }]);