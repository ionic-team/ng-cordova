'use strict';


/**
 * @ngdoc service
 * @name ngCordovaMocks.googlePlayGame
 *
 * @description
 * A service for testing Google Play Game features
 * in an app build with ngCordova.
 */  
ngCordovaMocks.factory('$cordovaGooglePlayGame', ['$q', function ($q) {
		var throwsError = false;
		var isSignedIn = false;
		var displayName = '';

		return {

		/**
	     * @ngdoc property
	     * @name _throwsError
	     * @propertyOf ngCordovaMocks.googlePlayGame
	     *
	     * @description
	     * A flag that signals whether a promise should be rejected or not. 
	     * This property should only be used in automated tests.
	    **/   
	    _throwsError: throwsError,

	    /**
	     * @ngdoc property
	     * @name _isSignedIn
	     * @propertyOf ngCordovaMocks.googlePlayGame
	     *
	     * @description
	     * A flag that signals whether a promise should be rejected or not. 
	     * This property should only be used in automated tests.
	    **/
	    _isSignedIn: isSignedIn,

	    /**
	     * @ngdoc property
	     * @name _displayName
	     * @propertyOf ngCordovaMocks.googlePlayGame
	     *
	     * @description
	     * A flag that signals whether a promise should be rejected or not. 
	     * This property should only be used in automated tests.
	    **/
	    _displayName: displayName,

			auth: function() {
				var defer = $q.defer();
				if (this._throwsError) {
					defer.reject('There was a auth error.');
				} else {
					this.isSignedIn = true;
					defer.resolve('SIGN IN SUCCESS');
				}
				return defer.promise;
			},
			signout: function() {
				var defer = $q.defer();
				if (this.throwsError) {
					defer.reject('There was a signout error.');
				} else {
					defer.resolve();
				}
				return defer.promise;
			},
			isSignedIn: function() {
				var defer = $q.defer();
				if (this._throwsError) {
					defer.reject('There was a isSignedIn error.');
				} else {
					defer.resolve({
						'isSignedIn': this._isSignedIn
					});
				}
				return defer.promise;
			},
			showPlayer: function() {
				var defer = $q.defer();
				if (this.throwsError) {
					defer.reject('There was a showPlayer error.');
				} else {
					defer.resolve({
						'displayName': this._displayName
					});
				}
				return defer.promise;
			},
			submitScore: function(data) {
				var defer = $q.defer();
				if (this._throwsError) {
					defer.reject('There was a submitScore error.');
				} else {
					defer.resolve('OK');
				}
				return defer.promise;
			},
			showAllLeaderboards: function() {
				var defer = $q.defer();
				if (this.throwsError) {
					defer.reject('There was a showAllLeaderboards error.');
				} else {
					defer.resolve('OK');
				}
				return defer.promise;
			},
			showLeaderboard: function(data) {
				var defer = $q.defer();
				if (this._throwsError) {
					defer.reject('There was a showLeaderboard error.');
				} else {
					defer.resolve('OK');
				}
				return defer.promise;
			},
			unlockAchievement: function(data) {
				var defer = $q.defer();
				if (this.throwsError) {
					defer.reject('There was a unlockAchievement error.');
				} else {
					defer.resolve('OK');
				}
				return defer.promise;
			},
			incrementAchievement: function(data) {
				var defer = $q.defer();
				if (this._throwsError) {
					defer.reject('There was a incrementAchievement error.');
				} else {
					defer.resolve('OK');
				}
				return defer.promise;
			},
			showAchievements: function() {
				var defer = $q.defer();
				if (this.throwsError) {
					defer.reject('There was a showAchievements error.');
				} else {
					defer.resolve('OK');
				}
				return defer.promise;
			}
		};

	}]);