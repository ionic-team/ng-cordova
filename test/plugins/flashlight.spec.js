describe('Service: $cordovaFlashlight', function() {

  var $cordovaFlashlight, $rootScope;

  var functionNames = [
    'switchOn',
    'switchOff'
  ];

  beforeEach(module('ngCordova.plugins.flashlight'));

  beforeEach(inject(function (_$cordovaFlashlight_, _$rootScope_) {
    $cordovaFlashlight = _$cordovaFlashlight_;
    $rootScope = _$rootScope_;

    window.plugins = {
      flashlight: {
        available: angular.noop
      }
    };

    for (var i = 0; i < functionNames.length; i++) {
      window.plugins.flashlight[functionNames[i]] = angular.noop;
    }
  }));


  it('should call window\'s plugins.flashlight.available method', function() {

    spyOn(window.plugins.flashlight, 'available')
      .andCallFake(function (successCb, errorCb) {
        successCb();
      });

    $cordovaFlashlight.available();
    $rootScope.$digest();

    expect(window.plugins.flashlight.available).toHaveBeenCalledWith(jasmine.any(Function));
  });

  for (var i = 0; i < functionNames.length; i++) {
    (function (fnName) {

      it('should call window\'s plugins.flashlight.' + fnName + ' method', function() {

        spyOn(window.plugins.flashlight, fnName)
          .andCallFake(function (successCb, errorCb) {
            successCb();
          });

        $cordovaFlashlight[fnName]();
        $rootScope.$digest();

        expect(window.plugins.flashlight[fnName]).toHaveBeenCalledWith(
          jasmine.any(Function),
          jasmine.any(Function)
        );
      });

      it('should call errorCb when in window\'s plugins.flashlight.' + fnName + ' a error orccurs', function() {

        var result;
        var errorObj = { someError: 1 };

        spyOn(window.plugins.flashlight, fnName)
          .andCallFake(function (successCb, errorCb) {
            errorCb(errorObj);
          });

        $cordovaFlashlight[fnName]()
          .then(angular.noop, function (error) {
            result = error;
          });

        $rootScope.$digest();

        expect(result).toBe(errorObj);
      });

    })(functionNames[i]);
  }
});
