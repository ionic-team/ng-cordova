describe('Service: $cordovaToast', function() {

  var $cordovaToast, $rootScope;

  var functionNames = [
    'showShortTop',
    'showShortCenter',
    'showShortBottom',
    'showLongTop',
    'showLongCenter',
    'showLongBottom'
  ];

  beforeEach(module('ngCordova.plugins.toast'));

  beforeEach(inject(function (_$cordovaToast_, _$q_, _$rootScope_) {
    $cordovaToast = _$cordovaToast_;
    $rootScope = _$rootScope_;

    window.plugins = {
      toast: {
        show: angular.noop,
        hide: angular.noop
      }
    };

    for (var i = 0; i < functionNames.length; i++) {
      window.plugins.toast[functionNames[i]] = angular.noop;
    }
  }));

  for (var i = 0; i < functionNames.length; i++) {

    (function (fnName) {

      it('should call window\'s plugins.toast.' + fnName + ' method', function() {

        var result;

        spyOn(window.plugins.toast, fnName)
          .andCallFake(function (message, successCb, errorCb) {
            successCb(true);
          });

        $cordovaToast[fnName]('some message')
          .then(function (response) {
            result = response;
          });

        $rootScope.$digest();

        expect(result).toBe(true);
        expect(window.plugins.toast[fnName].calls[0].args[0]).toBe('some message');
      });

      it('should call window\'s plugins.toast.' + fnName + ' errorCallback when recjected', function() {
        var errorResult;

        spyOn(window.plugins.toast, fnName)
          .andCallFake(function (message, successCb, errorCb) {
            errorCb('error response');
          });

        $cordovaToast[fnName]('some message')
          .then(angular.noop, function (response) {
            errorResult = response;
          });

        $rootScope.$digest();

        expect(errorResult).toBe('error response');
      });

    })(functionNames[i]);
  }

  it('should call window\'s plugins.toast.show method', function() {

    var result;

    spyOn(window.plugins.toast, 'show')
      .andCallFake(function (message, duration, position, successCb, errorCb) {
        successCb(true);
      });

    $cordovaToast.show('some message', 1000, 'top')
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(true);
    expect(window.plugins.toast.show).toHaveBeenCalledWith(
      'some message',
      1000,
      'top',
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call window\'s plugins.toast.show errorCallback when rejected', function() {
    var errorResult;

    spyOn(window.plugins.toast, 'show')
      .andCallFake(function (message, duration, position, successCb, errorCb) {
        errorCb('error response');
      });

    $cordovaToast.show('some message')
      .then(angular.noop, function (response) {
        errorResult = response;
      });

    $rootScope.$digest();

    expect(errorResult).toBe('error response');
  });

  it('should proxy plugins.toast.hide but never fail.', function () {
    var errorResult;

    spyOn(window.plugins.toast, 'hide')
      .andCallFake(function () {
        throw new Error('error response');
      });

    $cordovaToast.hide().then(angular.noop, function (response) {
      errorResult = response;
    });

    $rootScope.$digest();

    expect(errorResult).toBe('error response');
  });

});
