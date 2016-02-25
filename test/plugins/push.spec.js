describe('Service: $cordovaPush', function() {

  var $cordovaPush, $rootScope;

  beforeEach(module('ngCordova.plugins.push'));

  beforeEach(inject(function (_$cordovaPush_, _$rootScope_) {
    $cordovaPush = _$cordovaPush_;
    $rootScope = _$rootScope_;

    window.plugins = {
      pushNotification: {
        register: angular.noop,
        unregister: angular.noop,
        setApplicationIconBadgeNumber: angular.noop
      }
    };
  }));

  it('should call window\'s pushNotification.register method', function() {

    var result;
    var config = { someConfig: 1 };

    spyOn(window.plugins.pushNotification, 'register')
      .and.callFake(function (successCb, errorCb, config) {
        successCb(true);
      });

    $cordovaPush
      .register(config)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(true);
    expect(window.plugins.pushNotification.register.calls.argsFor(0)[2]).toBe(config);
  });

  it('should call errorCb when in window\'s pushNotification.register a error orccurs', function() {

    var result;
    var errorObj = { someError: 1 };

    spyOn(window.plugins.pushNotification, 'register')
      .and.callFake(function (successCb, errorCb, config) {
        errorCb(errorObj);
      });

    $cordovaPush.register()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

  it('should call window\'s pushNotification.unregister method', function() {

    var result;
    var options = { someConfig: 1 };

    spyOn(window.plugins.pushNotification, 'unregister')
      .and.callFake(function (successCb, errorCb, options) {
        successCb(true);
      });

    $cordovaPush
      .unregister(options)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(true);
    expect(window.plugins.pushNotification.unregister.calls.argsFor(0)[2]).toBe(options);
  });

  it('should call errorCb when in window\'s pushNotification.unregister a error orccurs', function() {

    var result;
    var errorObj = { someError: 1 };

    spyOn(window.plugins.pushNotification, 'unregister')
      .and.callFake(function (successCb, errorCb, options) {
        errorCb(errorObj);
      });

    $cordovaPush.unregister()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

  it('should call window\'s pushNotification.setApplicationIconBadgeNumber method', function() {

    var result;
    var number = 7;

    spyOn(window.plugins.pushNotification, 'setApplicationIconBadgeNumber')
      .and.callFake(function (successCb, errorCb, number) {
        successCb(true);
      });

    $cordovaPush
      .setBadgeNumber(number)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(true);
    expect(window.plugins.pushNotification.setApplicationIconBadgeNumber.calls.argsFor(0)[2]).toBe(number);
  });

  it('should call errorCb when in window\'s pushNotification.setApplicationIconBadgeNumber a error orccurs', function() {

    var result;
    var errorObj = { someError: 1 };

    spyOn(window.plugins.pushNotification, 'setApplicationIconBadgeNumber')
      .and.callFake(function (successCb, errorCb, number) {
        errorCb(errorObj);
      });

    $cordovaPush.setBadgeNumber()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

});
