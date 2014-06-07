angular.module('ngCordova.plugins.spinnerdialog', [])

.factory('$cordovaSpinnerDialog', [function() {

  return {
    show: function(title, message) {
	    return window.plugins.spinnerDialog.show(title, message);
    },
    hide: function() {
	    return window.plugins.spinnerDialog.hide();
    }
  }
  
}]);