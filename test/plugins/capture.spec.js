describe('Service: $cordovaCapture', function() {

  var $cordovaCapture, $rootScope;

  var functionNames = [
    'captureAudio',
    'captureImage',
    'captureVideo'
  ];

  beforeEach(module('ngCordova.plugins.capture'));

  beforeEach(inject(function (_$cordovaCapture_, _$q_, _$rootScope_) {
    $cordovaCapture = _$cordovaCapture_;
    $rootScope = _$rootScope_;

    navigator.device = {
      capture: {}
    };

    for (var i = 0; i < functionNames.length; i++) {
      navigator.device.capture[functionNames[i]] = angular.noop;
    }
  }));

  for (var i = 0; i < functionNames.length; i++) {
    (function (fnName) {

      it('should call navigator\'s device.capture.' + fnName + ' method', function() {

        var result;
        var options = { someOption: 1 };

        spyOn(navigator.device.capture, fnName)
          .andCallFake(function (successCb, errorCb, options) {
            successCb(true);
          });

        $cordovaCapture[fnName](options)
          .then(function (response) {
            result = response;
          });

        $rootScope.$digest();

        expect(result).toBe(true);
        expect(navigator.device.capture[fnName].calls[0].args[2]).toBe(options);
      });

      it('navigator\'s device.capture.' + fnName + ' return `null` when device.capture is not set', function() {

        var result;

        navigator.device.capture = null;

        $cordovaCapture[fnName]()
          .then(function (response) {
            result = response;
          });

        $rootScope.$digest();

        expect(result).toBe(null);
      });

      it('should call errorCb when in navigator\'s device.capture.' + fnName + ' a error orccurs', function() {

        var result;
        var options = { someOption: 1 };
        var errorObj = { someError: 1 };

        spyOn(navigator.device.capture, fnName)
          .andCallFake(function (successCb, errorCb, options) {
            errorCb(errorObj);
          });

        $cordovaCapture[fnName](options)
          .then(angular.noop, function (response) {
            result = response;
          });

        $rootScope.$digest();

        expect(result).toBe(errorObj);
      });

    })(functionNames[i]);
  }
});
