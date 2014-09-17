describe('ngCordova', function() {

  beforeEach(function() {
    LocalFileSystem = {TEMPORARY: 0, PERSISTENT: 1};
    module('ngCordova.plugins.file');
  });

  var $cordovaFileProvider, $rootScope, $cordovaFile;
 
  describe('$corodvaFileProvider', function() {

    it('Default fileSystemType is PERSISTENT', function() {
      module(function(_$cordovaFileProvider_){
        $cordovaFileProvider = _$cordovaFileProvider_;
      });
      inject(function(_$cordovaFile_) {
        expect($cordovaFileProvider.fileSystemType).toBe(LocalFileSystem.PERSISTENT);
      });
    });

    it('changing the fileSystemType works', function() {
      module(function(_$cordovaFileProvider_){
        $cordovaFileProvider = _$cordovaFileProvider_;
        $cordovaFileProvider.fileSystemType = LocalFileSystem.TEMPORARY;
      });
      inject(function(_$cordovaFile_) {
        expect($cordovaFileProvider.fileSystemType).toBe(LocalFileSystem.TEMPORARY);
      });
    });
  });

  describe('$cordovaFile', function() {

    var testFile = 'cordova-file-test.txt';
    var testText = '11111111112222222222222222222244444444444AAAAAAAAAAAA';

    beforeEach(inject(function(_$cordovaFile_, _$rootScope_) {
      $cordovaFile = _$cordovaFile_;
      $rootScope = _$rootScope_;
      window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
    }));

    it('should be defined', function() {
      expect($cordovaFile).toBeDefined();
    });

    it('createFile should work', function(done) {

      $cordovaFile.createFile(testFile, true)
        .then(function(file) {
          expect(true).toBe(true);
        }, function(error) {
          expect(true).toBe(false);
        })
        .finally(function() { done(); });
      $rootScope.$digest();
    });

    it('checkFile should work', function(done) {
      $cordovaFile.checkFile(testFile)
        .then(function(file) {
          expect(true).toBe(true);
        }, function(error) {
          expect(false).toBe(true);
        })
        .finally(function() { done(); });
      $rootScope.$digest();
    });

    it('removeFile should work', function(done) {
      $cordovaFile.removeFile(testFile)
        .then(function(file) {
          expect(true).toBe(true);
        }, function(error) {
          expect(false).toBe(true);
        })
        .finally(function() { done(); });
      $rootScope.$digest();
    });

    it('writeFile should work', function(done) {
      $cordovaFile.writeFile(testFile, testText)
        .then(function(file) {
          expect(true).toBe(true);
        }, function(error) {
          expect(false).toBe(true);
        })
        .finally(function() { done(); });
      $rootScope.$digest();
    });

    it('readAsText should work', function(done) {
      $cordovaFile.readAsText(testFile)
        .then(function(data) {
          expect(data).toBe(testText);
        }, function(error) {
          expect(false).toBe(true);
        })
        .finally(function() { done(); });
      $rootScope.$digest();
    });
  });
});