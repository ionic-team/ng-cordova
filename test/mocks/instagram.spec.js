describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaInstagram', function () {
		var $rootScope = null;
		var $cordovaInstagram = null;
		var shareOptions = {};

		beforeEach(inject(function (_$cordovaInstagram_, _$rootScope_) {
			$cordovaInstagram = _$cordovaInstagram_;
			$rootScope = _$rootScope_;
		}));

		it('should share', function (done) {
			$cordovaInstagram.share(shareOptions)
				.then(
					function() { expect(true).toBe(true); },
					function() { expect(false).toBe(true); }
				)
				.finally(done)
			;

			$rootScope.$digest();
		});

		it('should throw an error while sharing.', function(done) {
			$cordovaInstagram.throwsError = true;
			$cordovaInstagram.share(shareOptions)
				.then(
					function() { expect(true).toBe(false); },
					function() { expect(true).toBe(true); }
				)
				.finally(done)
			;

			$rootScope.$digest();
		});

		it('should return is installed', function (done) {
			$cordovaInstagram.isInstalled()
				.then(
					function(isInstalled) { expect(isInstalled).toBe(true); },
					function() { expect(false).toBe(true); }
				)
				.finally(done)
			;

			$rootScope.$digest();
		});

		it('should throw an error while checking isInstalled.', function(done) {
			$cordovaInstagram.throwsError = true;
			$cordovaInstagram.isInstalled()
				.then(
					function() { expect(true).toBe(false); },
					function() { expect(true).toBe(true); }
				)
				.finally(done)
			;

			$rootScope.$digest();
		});

		it('should return isInstalled as false', function(done) {
			$cordovaInstagram.returnIsInstalled = false;
			$cordovaInstagram.isInstalled()
				.then(
					function(isInstalled) { expect(isInstalled).toBe(false); },
					function() { expect(true).toBe(true); }
				)
				.finally(done)
			;

			$rootScope.$digest();
		});
  });
});
