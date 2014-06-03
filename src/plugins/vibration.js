angular.module('ngCordova.plugins.vibration', [])

.factory('$cordovaVibration', [function() {

  return {
  	vibrate: function(times) {
  	  return navigator.notification.vibrate(times);
	  }
  }
}]);
