angular.module('ngCordova.plugins.pinDialog', [])

.factory('$cordovaPinDialog', [function() {

  return {
    prompt: function(message, promptCallback, title, buttonLabels, defaultText) {
	    return window.plugins.pinDialog.prompt.apply(navigator.notification, arguments);
    }
  }
  
}]);