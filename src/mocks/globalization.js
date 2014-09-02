/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaGlobalization
 *
 * @description
 * A service for testing features related to a user's locale and timezone.
 * in an app build with ngCordova.
 */ 
ngCordovaMocks.factory('$cordovaGlobalization', ['$q', function($q) {
	var throwsError = false;
	var preferredLanguage = 'en';
	var firstDayOfWeek = 'Sunday';
	var localeName = '';

	return {
        /**
		 * @ngdoc property
		 * @name throwsError
		 * @propertyOf ngCordovaMocks.cordovaGlobalization
		 *
		 * @description
		 * A flag that signals whether a promise should be rejected or not. 
		 * This property should only be used in automated tests.
		**/				
		throwsError: throwsError,

        /**
		 * @ngdoc property
		 * @name preferredLanguage
		 * @propertyOf ngCordovaMocks.cordovaGlobalization
		 *
		 * @description
		 * The user's preferred language.
		 * This property should only be used in automated tests.
		**/						
		preferredLanguage: preferredLanguage,

        /**
		 * @ngdoc property
		 * @name localeName
		 * @propertyOf ngCordovaMocks.cordovaGlobalization
		 *
		 * @description
		 * The name of the user's locale.
		 * This property should only be used in automated tests.
		**/			
		localeName: localeName,

        /**
		 * @ngdoc property
		 * @name firstDayOfWeek
		 * @propertyOf ngCordovaMocks.cordovaGlobalization
		 *
		 * @description
		 * The first day of the week based on the user's locale.
		 * This property should only be used in automated tests.
		**/					
		firstDayOfWeek: firstDayOfWeek,

		getPreferredLanguage: function() {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error getting the preferred language.');
			} else {
				defer.resolve(this.preferredLanguage);
			}
			return defer.promise;
		},

		getLocaleName: function() {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error getting the locale name.');
			} else {
				defer.resolve(this.localeName);
			}
			return defer.promise;
		},

		getFirstDayOfWeek: function() {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error getting the first day of week.');
			} else {
				defer.resolve(this.firstDayOfWeek);
			}
			return defer.promise;
		},

		dateToString: function(date, options) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error getting the string from the date.');
			} else {
				var result = '';

				// TODO: Review
				date = date;
				options = options;
				// END TODO: Review

				defer.resolve(result);
			}
			return defer.promise;			
		},

		stringToDate: function(dateString, options) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error getting the date from the string.');
			} else {
				var result = '';

				// TODO: Review
				dateString = dateString;
				options = options;
				// END TODO: Review

				defer.resolve(result);
			}
			return defer.promise;			
		},	

		getDatePattern: function(options) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error getting the date pattern.');
			} else {
				var result = '';

				// TODO: Review
				options = options;
				// END TODO: Review

				defer.resolve(result);
			}
			return defer.promise;			
		},

		getDateNames: function(options) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error getting the date names.');
			} else {
				var result = '';

				// TODO: Review
				options = options;
				// END TODO: Review

				defer.resolve(result);
			}
			return defer.promise;
		},

		isDayLightSavingsTime: function(date) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error getting if this is in daylight savings time mode.');
			} else {
				var result = '';

				// TODO: Review
				date = date;
				// END TODO: Review

				defer.resolve(result);
			}
			return defer.promise;
		},

		numberToString: function(number, options) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error convertng the number to a string.');
			} else {
				var result = '';

				// TODO: Review
				number = number;
				options = options;
				// END TODO: Review

				defer.resolve(result);
			}
			return defer.promise;
		},

		stringToNumber: function(numberString, options) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error convertng the string to a number.');
			} else {
				var result = '';

				// TODO: Review
				options = options;
				// END TODO: Review

				defer.resolve(result);
			}
			return defer.promise;
		},

		getNumberPattern: function(options) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error convertng the string to a number.');
			} else {
				var result = '';

				// TODO: Review
				options = options;
				// END TODO: Review

				defer.resolve(result);
			}
			return defer.promise;			
		},

		getCurrencyPattern: function(currencyCode) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error convertng the string to a number.');
			} else {
				var result = '';

				// TODO: Review
				currencyCode = currencyCode;
				// END TODO: Review

				defer.resolve(result);
			}
			return defer.promise;			
		}	
	};
}]);