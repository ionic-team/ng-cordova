describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaStatusbar', function () {
		var $cordovaStatusbar = null;

		beforeEach(inject(function (_$cordovaStatusbar_) {
			$cordovaStatusbar = _$cordovaStatusbar_;
		}));

		it('should hide the status bar', function() {
			$cordovaStatusbar.hide();
			expect($cordovaStatusbar.isVisible()).toBe(false);
		});

		it('should show the status bar', function() {
			$cordovaStatusbar.show();
			expect($cordovaStatusbar.isVisible()).toBe(true);
		});
	});
})