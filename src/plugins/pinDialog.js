angular.module('ngCordova.plugins.pinDialog', [])

.factory('$cordovaPinDialog', ['$window', function($window) {

  return {
    prompt: function(message, promptCallback, title, buttonLabels, defaultText) {
	    return $window.plugins.pinDialog.prompt.apply(navigator.notification, arguments);
    }
  }
  
}]);