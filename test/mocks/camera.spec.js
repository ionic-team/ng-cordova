describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaCamera', function () {
		var $rootScope = null;
		var $cordovaCamera = null;
		var cameraOptions = {};

		beforeEach(inject(function (_$cordovaCamera_, _$rootScope_) {
			$cordovaCamera = _$cordovaCamera_;
			$rootScope = _$rootScope_;
		}));

		it('should get picture', function (done) {
			$cordovaCamera.getPicture(cameraOptions)
				.then(
					function() { expect(true).toBe(true); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should throw an error while getting the picture.', function(done) {
			$cordovaCamera.throwsError = true;
			$cordovaCamera.getPicture(cameraOptions)
				.then(
					function() { expect(true).toBe(false); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});
	});
})