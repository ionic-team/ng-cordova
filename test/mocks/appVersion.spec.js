describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaAppVersion', function() {
		var $rootScope = null;
		var $cordovaActionSheet = null;
		var options = {};

		beforeEach(inject(function (_$cordovaAppVersion_, _$rootScope_) {
			$cordovaAppVersion = _$cordovaAppVersion_;
			$rootScope = _$rootScope_;
		}));

		it('should be able to retrieve app name', function(done) {
			$cordovaAppVersion
				.getAppName()
				.then(
					function(name) { expect(name).toBe("mock app name") },
					function() { expect(false).toBe(true) }
				)
				.finally(function() { done(); });

			$rootScope.$digest();
		});

		it('should be able to retrieve package name', function(done) {
			$cordovaAppVersion
				.getPackageName()
				.then(
					function(name) { expect(name).toBe("com.package.mock") },
					function() { expect(false).toBe(true) }
				)
				.finally(function() { done(); });

			$rootScope.$digest();
		});

		it('should be able to retrieve version number', function(done) {
			$cordovaAppVersion
				.getVersionNumber()
				.then(
					function(name) { expect(name).toBe("1.2.3") },
					function() { expect(false).toBe(true) }
				)
				.finally(function() { done(); });

			$rootScope.$digest();
		});

		it('should be able to retrieve version code', function(done) {
			$cordovaAppVersion
				.getVersionCode()
				.then(
					function(name) { expect(name).toBe("4.5.6") },
					function() { expect(false).toBe(true) }
				)
				.finally(function() { done(); });

			$rootScope.$digest();
		});


	});
});
