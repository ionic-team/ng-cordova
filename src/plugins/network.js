// install   :      cordova plugin add org.apache.cordova.network-information
// link      :      https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md

angular.module('ngCordova.plugins.network', [])

  .factory('$cordovaNetwork', ['$rootScope', function ($rootScope) {

    return {
      getNetwork: function () {
        return navigator.connection.type;
      },

      isOnline: function () {
        var networkState = navigator.connection.type;
        return networkState !== Connection.UNKNOWN && networkState !== Connection.NONE;
      },

      isOffline: function () {
        var networkState = navigator.connection.type;
        return networkState === Connection.UNKNOWN || networkState === Connection.NONE;
      },

      watchOffline: function () {
        document.addEventListener("offline", function () {
          var networkState = navigator.connection.type;
          $rootScope.$apply(function () {
            $rootScope.$broadcast('networkOffline', networkState);
          });
        }, false);
      },

      watchOnline: function () {
        document.addEventListener("online", function () {
          var networkState = navigator.connection.type;
          $rootScope.$apply(function () {
            $rootScope.$broadcast('networkOnline', networkState);
          });
        }, false);
      },

      clearOfflineWatch: function () {
        document.removeEventListener("offline", function () {
          $rootScope.$$listeners.networkOffline = []; // not clearing watch --broken clear
        }, false)
      },

      clearOnlineWatch: function () {
        document.removeEventListener("online", function () {
          $rootScope.$$listeners.networkOnline = []; // not clearing watch --broken clear
        }, false)
      }
    };
  }]);
