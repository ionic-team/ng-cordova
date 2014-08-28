/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaCamera
 *
 * @description
 * A service for testing camera features
 * in an app build with ngCordova.
**/ 
ngCordovaMocks.factory('$cordovaCamera', ['$q', function($q) {
	var throwsError = false;

	return {
        /**
		 * @ngdoc property
		 * @name throwsError
		 * @propertyOf ngCordovaMocks.cordovaCamera
		 *
		 * @description
		 * A flag that signals whether a promise should be rejected or not. 
		 * This property should only be used in automated tests.
		**/		
		throwsError: throwsError,

		getPicture: function(options) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error getting the picture.');
			} else {
				if (options) {
					options = options;	// This is just to get by JSHint.
				}

				defer.resolve();					
			}
			return defer.promise;
		}
	};
}]);