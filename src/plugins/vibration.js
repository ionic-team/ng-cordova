angular.module('ngCordova.plugins.vibration', [])

.factory('Vibration', [function() {

  return {
  	vibrate: function(times) {
  	  return navigator.notification.vibrate(time);
	}
  }
}]);
