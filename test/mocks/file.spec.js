describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaFile', function () {
		var $cordovaFile = null;
		var $rootScope = null;
        var testFileName = "test.txt";
        var testData = "My data object";
        var testFolder ="testfolder";

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
				.finally(done);

			$rootScope.$digest();
		});

		it('should fail checking directory', function(done) {
			$cordovaFile.throwsError = true;
			$cordovaFile.checkDir('/some/directory')
				.then(
					function() { expect(true).toBe(false); },
					function() { expect(true).toBe(true); }
				)
				.finally(done);
			;

			$rootScope.$digest();
		});		

		it('should successfully create a directory', function(done) {
			$cordovaFile.createDir('/some/directory', true)
				.then(
					function() { expect(true).toBe(true); },
					function() { expect(false).toBe(true); }
				)
				.finally(done);

			$rootScope.$digest();
		});

		it('should fail creating a directory', function(done) {
			$cordovaFile.throwsError = true;
			$cordovaFile.createDir('/some/directory', true)
				.then(
					function() { expect(true).toBe(false); },
					function() { expect(true).toBe(true); }
				)
				.finally(done);

			$rootScope.$digest();
		});	

		it('should successfully check for a file', function(done) {
			$cordovaFile.checkFile('/some/directory', 'test.txt')
				.then(
					function() { expect(true).toBe(true); },
					function() { expect(false).toBe(true); }
				)
				.finally(done);

			$rootScope.$digest();
		});

		it('should fail checking directory', function(done) {
			$cordovaFile.throwsError = true;
			$cordovaFile.checkDir('/some/directory')
				.then(
					function() { expect(true).toBe(false); },
					function() { expect(true).toBe(true); }
				)
				.finally(done);

			$rootScope.$digest();
		});

        describe('tests with mockfFiles flag enabled',function(){
            beforeEach(function(){
                $cordovaFile.shouldMockFiles = true;
            });

            describe('file tests',function(){
                beforeEach(function(){
                    $cordovaFile.writeFile(testFileName, testData);
                    $rootScope.$digest();
                });

                it('should resolve if file exists',function(done){
                    $cordovaFile.checkFile(testFileName).then(function(){
                        expect(true).toEqual(true);
                    },function(){
                        expect(false).toEqual(true);
                    }).finally(done);
                    $rootScope.$digest();
                });

                it('should reject if file do not exists',function(done){
                    $cordovaFile.checkFile('nonExistingFile.txt').then(function(){
                        expect(false).toEqual(true);
                    },function(){
                        expect(true).toEqual(true);
                    }).finally(done);
                    $rootScope.$digest();
                });

                it('should return file content if file exists',function(done){
                    $cordovaFile.readFile(testFileName).then(function(data){
                        expect(testData).toEqual(data);
                    },function(){
                        expect(false).toEqual(true);
                    }).finally(done);
                    $rootScope.$digest();
                });

                it('shold be rejected if file does not exists',function(done){
                    $cordovaFile.readFile('NotValidFile').then(function(data){
                        expect(false).toEqual(true);
                    },function(){
                        expect(true).toEqual(true);
                    }).finally(done);
                    $rootScope.$digest();
                });
            });

            describe('directory tests',function(){
                beforeEach(function(){
                    $cordovaFile.createDir(testFolder, true);
                    $rootScope.$digest();
                });

                it('should resolve test directory which was created in setup',function(done){
                    $cordovaFile.checkDir(testFolder).then(function(){
                        expect(true).toEqual(true);
                    },function(){
                        expect(false).toEqual(true);
                    }).finally(done);
                    $rootScope.$digest();
                });

                it('should not return test directory as file',function(done){
                    $cordovaFile.readFile(testFolder).then(function(){
                        expect(false).toEqual(true);
                    },function(){
                        expect(true).toEqual(true);
                    }).finally(done);
                    $rootScope.$digest();
                });

            });
        });

	});

	// TODO: ping the fileSystem property to detect if
	// - check whether directory exists or not.
	// - overwrite works on the createDir function


});