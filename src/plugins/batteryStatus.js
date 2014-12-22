//  install   :   cordova plugin add org.apache.cordova.battery-status
//  link      :   https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md

angular.module('ngCordova.plugins.batteryStatus', [])

  .factory('$cordovaBatteryStatus', ['$rootScope', '$window', function ($rootScope, $window) {

    var scope = $rootScope.$new();

    $window.addEventListener('batterystatus', function (status) {
      scope.$broadcast('batterystatus', status);
    }, false);

    $window.addEventListener('batterycritical', function (status) {
      scope.$broadcast('batterycritical', status);
    }, false);

    $window.addEventListener('batterylow', function (status) {
      scope.$broadcast('batterylow', status);
    }, false);

    return scope;
  }]);
