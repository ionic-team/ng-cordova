describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaDeviceOrientation', function () {
		var count = 0;
		var $interval = null;
		var $rootScope = null;
		var $cordovaDeviceOrientation = null;
		var orientationServiceOptions = { frequency: 1000 };

		beforeEach(inject(function (_$interval_, _$rootScope_, _$cordovaDeviceOrientation_) {
			$cordovaDeviceOrientation = _$cordovaDeviceOrientation_;
			$rootScope = _$rootScope_;
			$interval = _$interval_;
			count = 0;
		}));

		it('should get the current heading', function (done) {
			var expected = { x:1, y:1, z:1, timestamp:Date() };
			$cordovaDeviceOrientation.currentHeading = expected;

			$cordovaDeviceOrientation.getCurrentHeading()
				.then(
					function(actual) { expect(actual).toBe(expected); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should throw an error while getting the current heading.', function(done) {
			$cordovaDeviceOrientation.throwsError = true;
			$cordovaDeviceOrientation.getCurrentHeading()
				.then(
					function(actual) { expect(false).toBe(true); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should track five readings over an interval', function() {
			var watch = $cordovaDeviceOrientation.watchHeading(orientationServiceOptions);
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
			var watch = $cordovaDeviceOrientation.watchHeading(orientationServiceOptions);
			watch.then(
				function() { },
				function(err) { expect(false).toBe(true); },
				function(result) {
					count = count + 1;
				}
			);

			$interval.flush(5000);
			$cordovaDeviceOrientation.clearWatch(watch.watchID);
			$rootScope.$digest();

			expect(count).toBe(5);
		});

		it('should cancel a created watch', function() {
			var watch = $cordovaDeviceOrientation.watchHeading(orientationServiceOptions);
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
})
