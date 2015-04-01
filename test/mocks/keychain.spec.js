describe('ngCordovaMocks', function() {
  beforeEach(function() {
    module('ngCordovaMocks');
  });

  describe('keychain', function() {
    var $rootScope = null;
    var $cordovaKeychain = null;

    beforeEach(inject(function(_$rootScope_, _$cordovaKeychain_) {
      $rootScope = _$rootScope_;
      $cordovaKeychain = _$cordovaKeychain_;
    }));

    it('should get values that are stored', function() {
      $cordovaKeychain.keychains = { 'testService' : { 'testKey' : 'testValue' } };
      $cordovaKeychain.getForKey('testKey', 'testService')
        .then(
          function(value) { expect(value).toEqual('testValue'); },
          function() { expect(false).toBe(true); }
        );

      $rootScope.$apply();
    });

    it('should not get values that are not stored', function() {
      $cordovaKeychain.getForKey('testKey', 'testService')
        .then(
          function() { expect(false).toBe(true); },
          function() { expect(true).toBe(true); }
        );

      $rootScope.$apply();
    });

    it('should store values', function() {
      $cordovaKeychain.setForKey('testKey', 'testService', 'testValue')
        .then(
          function() { expect(true).toBe(true); },
          function() { expect(false).toBe(true); }
        )
        .finally(
          function() {
            expect($cordovaKeychain.keychains['testService']).toEqual({ 'testKey' : 'testValue'});
          }
        );

      $rootScope.$apply();
    });

    it('should remove values', function() {
      $cordovaKeychain.keychains = { 'testService' : { 'testKey' : 'testValue' }};
      $cordovaKeychain.removeForKey('testKey', 'testService')
        .then(
          function() { expect(true).toBe(true); },
          function() { expect(false).toBe(true); }
        )
        .finally(
          function() {
            expect($cordovaKeychain.keychains['testService']['testKey']).toBeUndefined();
          }
        );

      $rootScope.$apply();
    });
  });
});
