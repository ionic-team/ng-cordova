describe('ngCordovaMocks', function() {
  beforeEach(function() {
    module('ngCordovaMocks');
  });

  describe('cordovaGoogleAnalytics', function () {
    var $timeout = null;
    var $cordovaGoogleAnalytics = null;

    beforeEach(inject(function (_$cordovaGoogleAnalytics_, _$timeout_) {
      $cordovaGoogleAnalytics = _$cordovaGoogleAnalytics_;
      $timeout = _$timeout_;
    }));

    var testPromises = function testPromises(funcName) {
      $cordovaGoogleAnalytics[funcName](1)
        .then(
          function() { expect(true).toBe(true); },
          function() { expect(false).toBe(true); }
        );

      $timeout.flush();

      $cordovaGoogleAnalytics.throwsError = true;
      $cordovaGoogleAnalytics[funcName](1)
        .then(
          function() { expect(false).toBe(true); },
          function() { expect(true).toBe(true); }
        );

      $timeout.flush();
    };

    it('should start tracker', function () {
      testPromises('startTrackerWithId');
    });

    it('should set User Id.', function() {
      testPromises('setUserId');
    });

    it('should set debug mode.', function() {
      testPromises('debugMode');
    });

    it('should track view.', function() {
      testPromises('trackView');
    });

    it('should add customer dimensions.', function() {
      testPromises('addCustomDimension');
    });

    it('should add customer dimensions.', function() {
      testPromises('trackEvent');
    });

    it('should add transaction.', function() {
      testPromises('addTransaction');
    });

    it('should add add a transaction item.', function() {
      testPromises('addTransactionItem');
    });
  });
})