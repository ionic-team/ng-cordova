describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaBrightness', function () {
		var $cordovaBrightness = null;

		beforeEach(inject(function (_$cordovaBrightness_) {
			$cordovaBrightness = _$cordovaBrightness_;
		}));

		it('should get the current brightness', function () {
			$cordovaBrightness.get().then(function (result) {
				expect(result.value).toEqual(100);
			});
		});

		it('should set the current brightness', function () {
			$cordovaBrightness.set(50);

			var currentBrightness = $cordovaBrightness.get();
			$cordovaBrightness.get().then(function (result) {
				expect(result.value).toEqual(50);
			});
		});
	});
})