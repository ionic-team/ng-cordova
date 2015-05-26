describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaQRCodeScanner', function () {
		var $rootScope = null;
		var $cordovaQRCodeScanner = null;

		beforeEach(inject(function (_$cordovaQRCodeScanner_, _$rootScope_) {
			$cordovaQRCodeScanner = _$cordovaQRCodeScanner_;
			$rootScope = _$rootScope_;
		}));

		it('should do a scan', function (done) {
			var expectedText = 'Some UPC Code';
			$cordovaQRCodeScanner.scannedText = expectedText;

			$cordovaQRCodeScanner.scan()
				.then(
					function(result) {
						expect(result.text).toBe(expectedText);
					},
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should throw an error while scanning.', function(done) {
			$cordovaQRCodeScanner.throwsError = true;
			$cordovaQRCodeScanner.scan()
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