/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaKeyboard
 *
 * @description
 * A service for testing device keyboard features
 * in an app build with ngCordova.
**/ 
ngCordovaMocks.factory('$cordovaKeyboard', function() {
  var isVisible=false;
	
	return {
    hideAccessoryBar: function (bool) {
    },

    close: function () {
      isVisible = false;
    },

    show: function () {
      isVisible = true;
    },

    disableScroll: function (bool) {
    },
   
    isVisible: function () {
      return isVisible;
    }

	};
});
