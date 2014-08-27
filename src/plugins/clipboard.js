angular.module('ngCordova.plugins.clipboard', [])

.factory('$cordovaClipboard', [function() {

  return {
    copy: function(text, onSuccess, onError) {
	    return window.cordova.plugins.clipboard.copy(text, onSuccess, onError);
    },

    paste: function(onSuccess, onError) {
	    return window.cordova.plugins.clipboard.copy(onSuccess, onError);
    }
  }
}]);