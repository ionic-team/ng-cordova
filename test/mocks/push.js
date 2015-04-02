'use strict';

describe('ngCordovaMocks', function() {
  beforeEach(function() {
    module('ngCordovaMocks');
  });

  describe('cordovaPush', function () {
    var $rootScope = null;
    var $timeout = null;
    var $cordovaPush = null;

    beforeEach(inject(function (_$cordovaPush_, _$rootScope_, _$timeout_) {
      $cordovaPush = _$cordovaPush_;
      $timeout = _$timeout_;
      $rootScope = _$rootScope_;
    }));

    it('should register', function (done) {
      var expectedToken = 'ABC';
      $cordovaPush.deviceToken = expectedToken;

      $rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
        expect(notification.event).toBe('registered');
        expect(notification.regid).toBe(expectedToken);
      });
      
      $cordovaPush.register({})
        .then(
          function(result) {
            expect(result).toBe(expectedToken);
          },
          function() { expect(false).toBe(true); }
        )
        .finally(function() { done(); })
      ;

      $rootScope.$digest();
      $timeout.flush();
    });

    it('should throw an error while register.', function(done) {
      $cordovaPush.throwsError = true;
      $cordovaPush.register()
        .then(
          function() { expect(true).toBe(false); },
          function() { expect(true).toBe(true); }
        )
        .finally(function() { done(); })
      ;

      $rootScope.$digest();
    });

    it('should unregister', function (done) {
      $cordovaPush.unregister()
        .then(
          function() { expect(true).toBe(true); },
          function() { expect(false).toBe(true); }
        )
        .finally(function() { done(); })
      ;

      $rootScope.$digest();
    });

    it('should throw an error while unregister.', function(done) {
      $cordovaPush.throwsError = true;
      $cordovaPush.unregister()
        .then(
          function() { expect(true).toBe(false); },
          function() { expect(true).toBe(true); }
        )
        .finally(function() { done(); })
      ;

      $rootScope.$digest();
    });

  });
});
