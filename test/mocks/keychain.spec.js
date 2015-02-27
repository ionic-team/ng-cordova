describe('ngCordovaMocks', function() {
  beforeEach(function() {
    module('ngCordovaMocks');
  });

  describe('keychain', function() {
    var $cordovaKeychain = null;

    beforeEach(inject(function(_$cordovaKeychain_) {
      $cordovaKeychain = _$cordovaKeychain_;
    }));

    it('should get values that are stored', function() {
      $cordovaKeychain.keychains = { 'testService' : { 'testKey' : 'testValue' } };
      $cordovaKeychain.getForKey('testKey', 'testService')
        .then(
          function(value) { expect(value).toEqual('testValue'); },
          function() { expect(false).toBe(true); }
        );
    });

    it('should not get values that are not stored', function() {
      $cordovaKeychain.getForKey('testKey', 'testService')
        .then(
          function() { expect(false).toBe(true); },
          function() { expect(true).toBe(true); }
        );
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
    });
  });
});
