/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaStatusbar
 *
 * @description
 * A service for testing the status bar
 * in an app build with ngCordova.
 */ 
ngCordovaMocks.factory('$cordovaStatusbar', function() {
	var isStatusBarVisible = true;
	var canOverlayWebView = true;

	return {
		/**
		 * @ngdoc property
		 * @name isStatusBarVisible
		 * @propertyOf ngCordovaMocks.cordovaStatusbar
		 *
		 * @description
		 * A flag that signals whether the status bar is visible or not.
		 * This property should only be used in automated tests.
		**/		
		isStatusBarVisible: isStatusBarVisible,

		/**
		 * @ngdoc property
		 * @name canOverlayWebView
		 * @propertyOf ngCordovaMocks.cordovaStatusbar
		 *
		 * @description
		 * A flag that signals whether the status bar can overlay the web view.
		 * This property should only be used in automated tests.
		**/			
		canOverlayWebView: canOverlayWebView,

		overlaysWebView: function(bool) {
			this.canOverlayWebView = bool;
		},

		style: function(style) {
			// TODO: Review
			return style;
		},

		styleHex: function(colorHex) {
			// TODO: review
			return colorHex;
		},

		styleColor: function(color) {
			// TODO: review
			return color;
		},

		hide: function() {
			this.isStatusBarVisible = false;
		},

		show: function() {
			this.isStatusBarVisible = true;
		},

		isVisible: function () {
			return this.isStatusBarVisible;
		}
	};
});