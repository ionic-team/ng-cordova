angular.module('ngCordova.plugins.network', [])

  .factory('$cordovaNetwork', [function () {

    return {

      getNetwork: function () {
        return navigator.connection.type;
      },

      isOnline: function () {
        var networkSate = navigator.connection.type;
        return networkSate != Connection.UNKNOWN;
      },

      isOffline: function () {
        var networkSate = navigator.connection.type;
        return networkSate == Connection.UNKNOWN;
      }
    }
  }]);
