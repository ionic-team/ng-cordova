describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaBarcodeScanner', function () {
		var $rootScope = null;
		var $cordovaBarcodeScanner = null;

		beforeEach(inject(function (_$cordovaBarcodeScanner_, _$rootScope_) {
			$cordovaBarcodeScanner = _$cordovaBarcodeScanner_;
			$rootScope = _$rootScope_;
		}));

		it('should do a scan', function (done) {
			var expectedText = 'Some UPC Code';
			$cordovaBarcodeScanner.scannedText = expectedText;

			var expectedFormat = 'TEXT_TYPE';
			$cordovaBarcodeScanner.scannedFormat = expectedFormat;

			$cordovaBarcodeScanner.scan()
				.then(
					function(result) {
						expect(result.text).toBe(expectedText);
						expect(result.format).toBe(expectedFormat); 
					},
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should throw an error while scanning.', function(done) {
			$cordovaBarcodeScanner.throwsError = true;
			$cordovaBarcodeScanner.scan()
				.then(
					function() { expect(true).toBe(false); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should encode.', function(done) {
			var expectedText = 'http://www.ecofic.com';
			var expectedFormat = 'TEXT_TYPE';

			$cordovaBarcodeScanner.encode(expectedFormat, expectedText)
				.then(
					function() { 
						expect($cordovaBarcodeScanner.scannedText).toBe(expectedText);
						expect($cordovaBarcodeScanner.scannedFormat).toBe(expectedFormat); 
					},
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});		

		it('should throw an error while encoding.', function(done) {
			$cordovaBarcodeScanner.throwsError = true;
			$cordovaBarcodeScanner.encode()
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