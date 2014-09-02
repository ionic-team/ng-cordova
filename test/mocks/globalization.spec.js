describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaGlobalization', function () {
		var $rootScope = null;
		var $cordovaGlobalization = null;

		beforeEach(inject(function (_$cordovaGlobalization_, _$rootScope_) {
			$cordovaGlobalization = _$cordovaGlobalization_;
			$rootScope = _$rootScope_;
		}));

		it('should get the preferred language', function (done) {
			var expected = 'English';
			$cordovaGlobalization.preferredLanguage = expected;

			$cordovaGlobalization.getPreferredLanguage()
				.then(
					function(actual) { expect(actual).toBe(expected); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should throw an error while getting the preferred language.', function(done) {
			$cordovaGlobalization.throwsError = true;
			$cordovaGlobalization.getPreferredLanguage()
				.then(
					function(actual) { expect(false).toBe(true); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();			
		});

		it('should get the locale', function (done) {
			var expected = 'EN';
			$cordovaGlobalization.localeName = expected;

			$cordovaGlobalization.getLocaleName()
				.then(
					function(actual) { expect(actual).toBe(expected); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should throw an error while getting the locale.', function(done) {
			$cordovaGlobalization.throwsError = true;
			$cordovaGlobalization.getLocaleName()
				.then(
					function(actual) { expect(false).toBe(true); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();			
		});

	});
})