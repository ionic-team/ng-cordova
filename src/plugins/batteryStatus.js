//  install   :   cordova plugin add org.apache.cordova.battery-status
//  link      :   https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md

angular.module('ngCordova.plugins.batteryStatus', [])

  .factory('$cordovaBatteryStatus', ['$rootScope', '$window', function ($rootScope, $window) {

    document.addEventListener("deviceready", function () {
      if (navigator.battery) {
        $window.addEventListener('batterystatus', function (status) {
          $rootScope.$broadcast('$cordovaBatteryStatus:status', status);
        }, false);

        $window.addEventListener('batterycritical', function (status) {
          $rootScope.$broadcast('$cordovaBatteryStatus:critical', status);
        }, false);

        $window.addEventListener('batterylow', function (status) {
          $rootScope.$broadcast('$cordovaBatteryStatus:low', status);
        }, false);
      }
    }, false);
  }])
  .run(function ($cordovaBatteryStatus) {
  });
