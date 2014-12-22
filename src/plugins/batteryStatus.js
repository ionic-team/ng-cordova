//  install   :   cordova plugin add org.apache.cordova.battery-status
//  link      :   https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md

angular.module('ngCordova.plugins.battery-status', [])

  .factory('$cordovaBatteryStatus', ['$rootScope', '$window', function ($rootScope, $window) {

    var scope = $rootScope.$new();

    $window.addEventListener('batterystatus', function (event) {
      scope.$broadcast('batterystatus', event);
    }, false);

    $window.addEventListener('batterycritical', function (event) {
      scope.$broadcast('batterycritical', event);
    }, false);

    $window.addEventListener('batterylow', function (event) {
      scope.$broadcast('batterylow', event);
    }, false);

    return scope;
  }]);
