// install   :      cordova plugin add org.apache.cordova.network-information
// link      :      https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md

angular.module('ngCordova.plugins.network', [])

  .factory('$cordovaNetwork', ['$rootScope', function ($rootScope) {


    var offlineEvent = function () {
      var networkState = navigator.connection.type;
      $rootScope.$apply(function () {
        $rootScope.$broadcast('networkOffline', networkState);
      });
    };

    var onlineEvent = function () {
      var networkState = navigator.connection.type;
      $rootScope.$apply(function () {
        $rootScope.$broadcast('networkOnline', networkState);
      });
    };

    document.addEventListener("offline", offlineEvent, false);
    document.addEventListener("online", onlineEvent, false);

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

      clearOfflineWatch: function () {
        document.removeEventListener("offline", offlineEvent);
        $rootScope.$$listeners["networkOffline"] = [];
      },

      clearOnlineWatch: function () {
        document.removeEventListener("online", offlineEvent);
        $rootScope.$$listeners["networkOnline"] = [];
      }
    };
  }]);
