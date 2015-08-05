describe('Service: $cordovaUpsPush', function () {

  var $cordovaUpsPush, $rootScope;

  beforeEach(module('ngCordova.plugins.upsPush'));

  beforeEach(inject(function (_$cordovaUpsPush_, _$rootScope_) {
    $cordovaUpsPush = _$cordovaUpsPush_;
    $rootScope = _$rootScope_;

    window.push = {
      register: angular.noop,
      unregister: angular.noop,
      setApplicationIconBadgeNumber: angular.noop
    };
  }));

  it('should call push\'s register method', function () {

    var called = false,
      config = { someConfig: 1 };

    spyOn(window.push, 'register')
      .andCallFake(function (notifyCb, successCb, errorCb, config) {
        successCb();
      });

    $cordovaUpsPush
      .register(config)
      .then(function () {
        called = true;
      });

    $rootScope.$digest();

    expect(called).toBe(true);
    expect(window.push.register.calls[0].args[3]).toBe(config);
  });

  it('should call errorCb when in push\'s register a error orccurs', function () {

    var result,
      errorObj = { someError: 1 };

    spyOn(window.push, 'register')
      .andCallFake(function (notifyCb, successCb, errorCb, config) {
        errorCb(errorObj);
      });

    $cordovaUpsPush.register()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

  it('should call push\'s unregister method', function() {

    var called = false;

    spyOn(window.push, 'unregister')
      .andCallFake(function (successCb, errorCb) {
        successCb();
      });

    $cordovaUpsPush
      .unregister()
      .then(function () {
        called = true;
      });

    $rootScope.$digest();

    expect(called).toBe(true);
    expect(window.push.unregister.calls[0].args[2]);
  });

  it('should call errorCb when in push\'s unregister a error orccurs', function() {

    var result;
    var errorObj = { someError: 1 };

    spyOn(window.push, 'unregister')
      .andCallFake(function (successCb, errorCb) {
        errorCb(errorObj);
      });

    $cordovaUpsPush.unregister()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

  it('should call push\'s setApplicationIconBadgeNumber method', function() {

    var called = false,
      number = 7;

    spyOn(window.push, 'setApplicationIconBadgeNumber')
      .andCallFake(function (successCb, number) {
        successCb();
      });

    $cordovaUpsPush
      .setBadgeNumber(number)
      .then(function () {
        called = true;
      });

    $rootScope.$digest();

    expect(called).toBe(true);
    expect(window.push.setApplicationIconBadgeNumber.calls[0].args[1]).toBe(number);
  });
});
