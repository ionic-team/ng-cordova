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
			var expected = {coords: { longitude:1, latitude:1 }, timestamp:Date()};
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
