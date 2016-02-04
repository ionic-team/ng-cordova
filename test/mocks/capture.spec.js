describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaCapture', function () {
		var $cordovaCapture = null;
		var $timeout = null;
		var $rootScope = null;

		beforeEach(inject(function (_$timeout_, _$rootScope_, _$cordovaCapture_) {
			$cordovaCapture = _$cordovaCapture_;
			$timeout = _$timeout_;
			$rootScope = _$rootScope_;
		}));

		it('should do something', function() {
		});
	});
})