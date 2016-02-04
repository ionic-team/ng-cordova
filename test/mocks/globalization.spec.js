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
			$cordovaGlobalization.getPreferredLanguage()
				.then(
					function(actual) {
                        expect(typeof actual).toBe('object');
                        expect(actual.value).toBeDefined();
                        expect(typeof actual.value).toBe('string');
                        expect(actual.value.length > 0).toBe(true);
                    },
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
			$cordovaGlobalization.getLocaleName()
				.then(
					function(actual) {
                        expect(actual).toBeDefined();
                        expect(typeof actual).toBe('object');
                        expect(actual.value).toBeDefined();
                        expect(typeof actual.value).toBe('string');
                        expect(actual.value.length > 0).toBe(true);
                    },
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