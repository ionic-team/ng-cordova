// install   :      cordova plugin add org.apache.cordova.network-information
// link      :      https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md

angular.module('ngCordova.plugins.network', [])

  .factory('$cordovaNetwork', ['$cordova', function ($cordova) {

    return {
      getNetwork: function () {
        $cordova.ready().then(function () {
          return navigator.connection.type;
        });
      },

      isOnline: function () {
        $cordova.ready().then(function () {
          var networkState = navigator.connection.type;
          return networkState !== Connection.UNKNOWN && networkState !== Connection.NONE;
        });
      },

      isOffline: function () {
        $cordova.ready().then(function () {
          var networkState = navigator.connection.type;
          return networkState === Connection.UNKNOWN || networkState === Connection.NONE;
        });
      },

      watchNetwork: function () {
        // function for watching online / offline
      }
    }
  }]);
