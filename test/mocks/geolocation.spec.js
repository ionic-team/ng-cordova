'use strict';

describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaGeolocation', function () {
		var count = 0;
		var $interval = null;
		var $rootScope = null;
		var $cordovaGeolocation = null;
		var gpsOptions = {};

		beforeEach(inject(function (_$cordovaGeolocation_, _$rootScope_, _$interval_) {
			$cordovaGeolocation = _$cordovaGeolocation_;
			$rootScope = _$rootScope_;
			$interval = _$interval_;
			count = 0;
		}));

		it('should get the current position', function (done) {
			var expected = { x:1, y:1, z:1, timestamp:Date() };
			$cordovaGeolocation.currentPosition = expected;
			$cordovaGeolocation.useHostAbilities = false;

			$cordovaGeolocation.getCurrentPosition()
				.then(
					function(actual) { expect(actual).toBe(expected); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should throw an error while getting the current position.', function(done) {
			$cordovaGeolocation.throwsError = true;
			$cordovaGeolocation.getCurrentPosition()
				.then(
					function(actual) { expect(false).toBe(true); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should track five locations over an interval', function() {
			$cordovaGeolocation.useHostAbilities = false;

			var watch = $cordovaGeolocation.watchPosition(gpsOptions);
			watch.then(
				function() { },
				function(err) { expect(false).toBe(true); },
				function(result) {
					count = count + 1;
				}
			);

			$interval.flush(5000);
			$rootScope.$digest();

			expect(count).toBe(5);
		});

		it('should track location with navigator geolocation', inject(function($timeout) {
			var stubNavGeo = sinon.stub(navigator.geolocation, 'getCurrentPosition', function(callback) {
				callback({
					coords: { latitude: 1, longitude: 2 }
				});
			});
			
			$cordovaGeolocation.watchPosition(gpsOptions).then(
				function() { },
				function(err) { expect(false).toBe(true); },
				function(result) {
					count = count + 1;
				}
			);

			$interval.flush(1000);

			expect(stubNavGeo.calledOnce).toBe(true);
			expect(count).toBe(1);
		}));

		it('should set next position', function() {
			var pos = null;
			var positionExpected = {
				coords: { latitude: 1, longitude: 2 }
			};

			$cordovaGeolocation.useHostAbilities = false;
			$cordovaGeolocation.nextPosition = positionExpected;

			var watch = $cordovaGeolocation.watchPosition(gpsOptions);
			watch.then(
				function() { },
				function(err) { expect(false).toBe(true); },
				function(result) {
					count = count + 1;
					pos = result;
				}
			);

			$interval.flush(1000);

			expect(count).toBe(1);
			expect(pos).toBe(positionExpected);
		});

		it('should clear a created watch', function() {
			$cordovaGeolocation.useHostAbilities = false;

			var watch = $cordovaGeolocation.watchPosition(gpsOptions);
			watch.then(
				function() { },
				function(err) { expect(false).toBe(true); },
				function(result) {
					count = count + 1;
				}
			);

			$interval.flush(5000);
			$cordovaGeolocation.clearWatch(watch.watchID);
			$rootScope.$digest();

			expect(count).toBe(5);
		});

		it('should cancel a created watch', function() {
			$cordovaGeolocation.useHostAbilities = false;

			var watch = $cordovaGeolocation.watchPosition(gpsOptions);
			watch.then(
				function() { },
				function(err) { expect(false).toBe(true); },
				function(result) {
					count = count + 1;
				}
			);

			$interval.flush(5000);
			watch.cancel();
			$rootScope.$digest();

			expect(count).toBe(5);
		});

	});

});
