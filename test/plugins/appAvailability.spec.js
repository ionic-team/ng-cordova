describe('Service: $cordovaAppAvailability', function() {

  var $cordovaAppAvailability, $rootScope;

  beforeEach(module('ngCordova.plugins.appAvailability'));

  beforeEach(inject(function (_$cordovaAppAvailability_, _$rootScope_) {
    $cordovaAppAvailability = _$cordovaAppAvailability_;
    $rootScope = _$rootScope_;

    window.appAvailability = {
      check: angular.noop
    };
  }));

  it('should call window\'s appAvailability.check method', function() {

    var result;

    spyOn(window.appAvailability, 'check')
      .andCallFake(function (urlScheme, successCb, errorCb) {
        successCb(true);
      });

    $cordovaAppAvailability
      .check('twitter://')
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(true);
    expect(window.appAvailability.check.calls[0].args[0]).toBe('twitter://');
  });

  it('should call errorCb when in window\'s appAvailability.check a error orccurs', function() {

    var result;
    var errorObj = { someError: 1 };

    spyOn(window.appAvailability, 'check')
      .andCallFake(function (urlScheme, successCb, errorCb) {
        errorCb(errorObj);
      });

    $cordovaAppAvailability.check()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

});
