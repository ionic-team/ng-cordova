angular.module('ngCordova.plugins.vibration', [])

.factory('$cordovaVibration', [function() {

  return {
  	vibrate: function(times) {
  	  return navigator.notification.vibrate(times);
	  },
    vibrateWithPattern: function(pattern, repeat) {
      return navigator.notification.vibrateWithPattern(pattern, repeat);
    },
    cancelVibration: function() {
      return navigator.notification.cancelVibration();
    }
  }
}]);
