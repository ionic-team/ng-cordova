describe('Service: $cordovaCamera', function() {

  var $cordovaCamera, $rootScope;

  beforeEach(module('ngCordova.plugins.camera'));

  beforeEach(inject(function (_$cordovaCamera_, _$q_, _$rootScope_) {
    $cordovaCamera = _$cordovaCamera_;
    $rootScope = _$rootScope_;

    navigator.camera = {
      getPicture: angular.noop,
      cleanup: angular.noop,
    };
  }));

  it('should call return null when navigator.camera is undefined', function() {

    navigator.camera = undefined;
    var options = { someOptions: 1 };

    $cordovaCamera
      .getPicture(options)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(null);
  });

  it('should call navigator\'s camera.getPicture method', function() {

    var result;
    var options = { someOptions: 1 };
    var imageData = { url: 'file://blob' };

    spyOn(navigator.camera, 'getPicture')
      .and.callFake(function (successCb, errorCb, options) {
        successCb(imageData);
      });

    $cordovaCamera
      .getPicture(options)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(imageData);
    expect(navigator.camera.getPicture.calls.argsFor(0)[2]).toBe(options);
  });

  it('should call errorCb when in window\'s appAvailability.getPicture a error orccurs', function() {

    var result;
    var errorObj = { someError: 1 };

    spyOn(navigator.camera, 'getPicture')
      .and.callFake(function (successCb, errorCb, options) {
        errorCb(errorObj);
      });

    $cordovaCamera.getPicture()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

  it('should call navigator\'s camera.cleanup method', function() {

    var result;
    var options = { someOptions: 1 };

    spyOn(navigator.camera, 'cleanup')
      .and.callFake(function (successCb, errorCb) {
        successCb();
      });

    $cordovaCamera.cleanup();

    $rootScope.$digest();

    expect(navigator.camera.cleanup.calls.argsFor(0)[2]).toBe();
  });

  it('should call errorCb when in window\'s appAvailability.cleanup a error orccurs', function() {

    var result;
    var errorObj = { someError: 1 };

    spyOn(navigator.camera, 'cleanup')
      .and.callFake(function (successCb, errorCb, options) {
        errorCb(errorObj);
      });

    $cordovaCamera.cleanup()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

});
