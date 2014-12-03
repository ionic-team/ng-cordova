// install   :      cordova plugin add org.apache.cordova.network-information
// link      :      https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md

angular.module('ngCordova.plugins.network', [])

  .factory('$cordovaNetwork', ['cordovaReady', function (cordovaReady) {

    return {

      getNetwork: cordovaReady(function () {
        return navigator.connection.type;
      }),

      isOnline: cordovaReady(function () {
        var networkState = navigator.connection.type;
        return networkState !== Connection.UNKNOWN && networkState !== Connection.NONE;
      }),

      isOffline:cordovaReady( function () {
        var networkState = navigator.connection.type;
        return networkState === Connection.UNKNOWN || networkState === Connection.NONE;
      }),

      watchNetwork: cordovaReady(function () {
        // function for watching online / offline
      })
    };
  }]);
