angular.module('ngCordova.plugins.network', [])

.factory('Network', ['$q', function($q) {

  return {

    getNetwork: function () {

      var networkSate = navigator.connection.type;

      var states = {};
      states[Connection.UNKNOWN]  = 'Unknown connection';
      states[Connection.ETHERNET] = 'Ethernet connection';
      states[Connection.WIFI]     = 'WiFi connection';
      states[Connection.CELL_2G]  = 'Cell 2G connection';
      states[Connection.CELL_3G]  = 'Cell 3G connection';
      states[Connection.CELL_4G]  = 'Cell 4G connection';
      states[Connection.CELL]     = 'Cell generic connection';
      states[Connection.NONE]     = 'No network connection';


      return networkSate;
      //return states[networkSate];

    },

    isOnline: function() {
      var networkSate = navigator.connection.type;

      return networkSate == Connection.UNKNOWN;
    },

    isOffline: function() {
      var networkSate = navigator.connection.type;

      return networkSate == Connection.UNKNOWN;
    }
  }
}]);
