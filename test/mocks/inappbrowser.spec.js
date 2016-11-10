describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaInAppBrowser', function () {
		var $cordovaInAppBrowser;

		beforeEach(inject(function (_$cordovaInAppBrowser_) {
			$cordovaInAppBrowser = _$cordovaInAppBrowser_;
		}));

		it('should exists', function () {
			expect($cordovaInAppBrowser).toBeDefined();
		});

		it('should have an \'open\' method', function () {
			expect($cordovaInAppBrowser.open).toBeDefined();
			expect(angular.isFunction($cordovaInAppBrowser.open)).toBe(true);
		});

		it('should have an \'close\' method', function () {
			expect($cordovaInAppBrowser.close).toBeDefined();
			expect(angular.isFunction($cordovaInAppBrowser.close)).toBe(true);
		});

		it('should have an \'show\' method', function () {
			expect($cordovaInAppBrowser.show).toBeDefined();
			expect(angular.isFunction($cordovaInAppBrowser.show)).toBe(true);
		});

		it('should have an \'executeScript\' method', function () {
			expect($cordovaInAppBrowser.executeScript).toBeDefined();
			expect(angular.isFunction($cordovaInAppBrowser.executeScript)).toBe(true);
		});

		it('should have an \'insertCSS\' method', function () {
			expect($cordovaInAppBrowser.insertCSS).toBeDefined();
			expect(angular.isFunction($cordovaInAppBrowser.insertCSS)).toBe(true);
		});
	});

});
