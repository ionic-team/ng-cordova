describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaActionSheet', function() {
		var $rootScope = null;
		var $cordovaActionSheet = null;
		var options = {};

		beforeEach(inject(function (_$cordovaActionSheet_, _$rootScope_) {
			$cordovaActionSheet = _$cordovaActionSheet_;
			$rootScope = _$rootScope_;
		}));

		it('should be able to show', function(done) {
			$cordovaActionSheet
				.show(options)
				.then(
					function() { expect(true).toBe(true) },
					function() { expect(false).toBe(true) }
				)
				.finally(function() { done(); });

			$rootScope.$digest();
		});

		it('should throws error when trying to show action sheet', function(done) {
			$cordovaActionSheet.throwsError = true;
			$cordovaActionSheet
				.show(options)
				.then(
					function() { expect(false).toBe(true) },
					function() { expect(true).toBe(true) }
				)
				.finally(function() { done(); });

			$rootScope.$digest();
		});
	});
});
