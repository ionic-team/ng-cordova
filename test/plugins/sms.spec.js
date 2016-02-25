describe('Service: $cordovaSms', function() {

  var $cordovaSms, $rootScope;

  beforeEach(module('ngCordova.plugins.sms'));

  beforeEach(inject(function (_$cordovaSms_, _$q_, _$rootScope_) {
    $cordovaSms = _$cordovaSms_;
    $rootScope = _$rootScope_;

    window.sms = {
      send: angular.noop
    };
  }));

  it('should call window\'s sms.send with correct parameters', function() {

    var result;
    var number = 0555129;
    var message = 'Hi, derp';
    var intent = 'INTENT';

    spyOn(window.sms, 'send')
      .and.callFake(function (number, message, intent, successCb, errorCb) {
        successCb(true);
      });

    $cordovaSms.send(number, message, intent).then(function (response) {
      result = response;
    });

    $rootScope.$digest();

    expect(result).toBe(true);
    expect(window.sms.send).toHaveBeenCalledWith(
      number,
      message,
      intent,
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should reject on error callback', function() {

    var errorResult;

    spyOn(window.sms, 'send')
      .and.callFake(function (number, message, intent, successCb, errorCb) {
        errorCb(false);
      });

    $cordovaSms.send(666, 'evil').then(
      angular.noop,
      function (err) {
        errorResult = err;
      });

    $rootScope.$digest();

    expect(errorResult).toBe(false);
  });
});
