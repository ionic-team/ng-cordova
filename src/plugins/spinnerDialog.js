angular.module('ngCordova.plugins.spinnerDialog', [])

.factory('$cordovaSpinnerDialog', ['$window', function($window) {

  return {
    show: function(title, message) {
	    return $window.plugins.spinnerDialog.show(title, message);
    },
    hide: function() {
	    return $window.plugins.spinnerDialog.hide();
    }
  }
  
}]);