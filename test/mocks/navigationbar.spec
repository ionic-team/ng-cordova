describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaNavigationbar', function () {
		var $cordovaNavigationbar = null;

		beforeEach(inject(function (_$cordovaNavigationbar_) {
			$cordovaNavigationbar = _$cordovaNavigationbar_;
		}));

	});
})
