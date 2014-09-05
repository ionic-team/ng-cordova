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
});