/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaGeolocation
 *
 * @description
 * A service for testing location services
 * in an app build with ngCordova.
 */ 
ngCordovaMocks.factory('$cordovaGeolocation', ['$interval', '$q', function($interval, $q) {
	var throwsError = false;
	var useHostAbilities = true;

	var watchIntervals = [];
	var locations = [];
	var currentPosition = null;
	var nextPosition = null;

	return {
        /**
		 * @ngdoc property
		 * @name throwsError
		 * @propertyOf ngCordovaMocks.cordovaGeolocation
		 *
		 * @description
		 * A flag that signals whether a promise should be rejected or not. 
		 * This property should only be used in automated tests.
		**/
		throwsError: throwsError,

        /**
		 * @ngdoc property
		 * @name watchIntervals
		 * @propertyOf ngCordovaMocks.cordovaGeolocation
		 *
		 * @description
		 * The collection of watchers that are currently active.
		 * This property should only be used in automated tests.
		**/		
		watchIntervals: watchIntervals,

        /**
		 * @ngdoc property
		 * @name locations
		 * @propertyOf ngCordovaMocks.cordovaGeolocation
		 *
		 * @description
		 * The collection of 'locations' that have been logged.
		 * This property should only be used in automated tests.
		**/				
		locations: locations,

        /**
		 * @ngdoc property
		 * @name currentPosition
		 * @propertyOf ngCordovaMocks.cordovaGeolocation
		 *
		 * @description
		 * The last location logged.
		 * This property should only be used in automated tests.
		**/						
		currentPosition: currentPosition,

        /**
		 * @ngdoc property
		 * @name nextPosition
		 * @propertyOf ngCordovaMocks.cordovaGeolocation
		 *
		 * @description
		 * The position to be logged the next time that a watcher
		 * gets the location.
		 * This property should only be used in automated tests.
		**/						
		nextPosition: nextPosition,

        /**
		 * @ngdoc property
		 * @name useHostAbilities
		 * @propertyOf ngCordovaMocks.cordovaGeolocation
		 *
		 * @description
		 * A flag that signals whether or not to try and use the host's 
		 * (browser or otherwise) geolocation capabilities.
		 * This property should only be used in automated tests.
		**/
		useHostAbilities: useHostAbilities,

		getCurrentPosition: function(options) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error getting the location.');
			} else {
				if (options) {
					options = options;	// This is just to get by JSHint.
				}

				if (this.useHostAbilities) {
					if (navigator.geolocation) {
						navigator.geolocation.getCurrentPosition(
							function(position) {
								this.currentPosition = position;
								defer.resolve(this.currentPosition);
							},
							function(error) {
								defer.reject(error);
							}
						);
					} else {
						defer.reject('Geolocation is not supported by this browser.');						
					}
				} else {
					defer.resolve(this.currentPosition);
				}
			}
			return defer.promise;
		},

		watchPosition: function(options) {
			var defer = $q.defer();
			var watchId = Math.floor((Math.random() * 1000000) + 1);

			this.locations = [];
			self = this;

			if (this.throwsError) {
				defer.reject('There was an error getting the geolocation.');
			} else {
				var delay = 1000;
				if (options && options.timeout) {
					delay = options.timeout;
				}				

				this.watchIntervals.push({
					watchId: watchId,
					interval: $interval(
						function() {
							if (self.throwsError) {
								defer.reject('There was an error watching the geolocation.');
							}

							// Attempt to use nextPosition.
							var result = self.nextPosition;
							if (result === null) {
								// Determine whether to use the host's geolocation capabilities or not
								if (self.useHostAbilities) {
									if (navigator.geolocation) {
										navigator.geolocation.getCurrentPosition(
											function(position) {
												self.currentPosition = position;
												self.locations.push(position);
												defer.resolve(position);
											},
											function(error) {
												defer.reject(error);
											}
										);
									} else {
										defer.reject('Geolocation is not supported by this browser.');						
									}
								} else {
									result = {
										coords: {
											latitude: ((Math.random() * 180) + 1) - 90,
											longitude: ((Math.random() * 360) + 1) - 180,
											altitude: ((Math.random() * 100) + 1),

											accuracy: ((Math.random() * 10) + 1),
											altitudeAccuracy: ((Math.random() * 10) + 1),
											heading: ((Math.random() * 360) + 1),
											speed: ((Math.random() * 100) + 1)
										},
										timestamp: Date.now()
									};

									self.currentPosition = result;
									self.locations.push(result);
									defer.notify(result);
								}
							}
						}, 
						delay
					)
				});
			}

			return {
				watchId: watchId,
				promise: defer.promise
			};						
		},

		clearWatch: function (watchId) {
			var defer = $q.defer();			
			if (watchId) {
				if (this.throwsError) {
					defer.reject('Unable to clear watch.');
				} else {
					var removed = -1;
					for (var i=0; i<this.watchIntervals.length; i++) {
						if (this.watchIntervals[i].watchId === watchId) {
							$interval.cancel(watchIntervals[i].interval);
							removed = i;
							break;
						}
					}

					if (removed !== -1) {
						this.watchIntervals.splice(removed, 1);
					}
				}
			} else {
				defer.reject('Unable to clear watch. No watch ID provided.');
			}
			return defer.promise;
		}		
	};
}]);