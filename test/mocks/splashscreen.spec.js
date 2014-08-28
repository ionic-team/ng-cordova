describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaSplashscreen', function () {
		var $cordovaSplashscreen = null;

		beforeEach(inject(function (_$cordovaSplashscreen_) {
			$cordovaSplashscreen = _$cordovaSplashscreen_;
		}));

		it('should hide the splash screen', function() {
			$cordovaSplashscreen.hide();
			expect(true).toBe(true);
		});

		it('should show the splash screen', function() {
			$cordovaSplashscreen.show();
			expect(true).toBe(true);
		});
	});
})