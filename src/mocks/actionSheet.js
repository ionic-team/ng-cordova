/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaActionSheet
 *
 * @description
 * A service for testing action sheet
 * in an app build with ngCordova.
 **/
ngCordovaMocks.factory('$cordovaActionSheet', ['$q', function ($q) {
  var throwsError = false;

	return {
		/**
		 * @ngdoc property
		 * @name throwsError
		 * @propertyOf ngCordovaMocks.cordovaActionSheet
		 * @type Boolean
		 *
		 * @description
		 * A flag that signals whether a promise should be rejected.
		 * This property should only be used in automated tests
		 */
		throwsError: throwsError,

		show: function () {
			var defer = $q.defer();

			if (this.throwsError) {
				defer.reject('There was an error on showing action sheet');
			} else {
				defer.resolve();
			}

			return defer.promise;
		}
	};
}]);
