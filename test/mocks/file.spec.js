describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaFile', function () {
		var $cordovaFile = null;
		var $rootScope = null;

		beforeEach(inject(function (_$cordovaFile_, _$rootScope_) {
			$cordovaFile = _$cordovaFile_;
			$rootScope = _$rootScope_;
		}));

		it('should successfully check directory', function(done) {
			$cordovaFile.checkDir('/some/directory')
				.then(
					function() { expect(true).toBe(true); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should fail checking directory', function(done) {
			$cordovaFile.throwsError = true;
			$cordovaFile.checkDir('/some/directory')
				.then(
					function() { expect(true).toBe(false); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});		

		it('should successfully create a directory', function(done) {
			$cordovaFile.createDir('/some/directory', true)
				.then(
					function() { expect(true).toBe(true); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should fail creating a directory', function(done) {
			$cordovaFile.throwsError = true;
			$cordovaFile.createDir('/some/directory', true)
				.then(
					function() { expect(true).toBe(false); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});	

		it('should successfully check for a file', function(done) {
			$cordovaFile.checkFile('/some/directory', 'test.txt')
				.then(
					function() { expect(true).toBe(true); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should fail checking directory', function(done) {
			$cordovaFile.throwsError = true;
			$cordovaFile.checkDir('/some/directory')
				.then(
					function() { expect(true).toBe(false); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});			
	});

	// TODO: ping the fileSystem property to detect if
	// - check whether directory exists or not.
	// - overwrite works on the createDir function


})