describe('Service: $cordovaScreenshot', function() {

  var $cordovaScreenshot, $rootScope;

  beforeEach(module('ngCordova.plugins.screenshot'));

  beforeEach(inject(function (_$cordovaScreenshot_, _$q_, _$rootScope_) {
    $cordovaScreenshot = _$cordovaScreenshot_;
    $rootScope = _$rootScope_;

    navigator.screenshot = {
      save: angular.noop,
      URI: angular.noop,
    };
  }));

  it('should call return null when navigator.screenshot is undefined when capturing to file', function() {

    navigator.screenshot = undefined;

    $cordovaScreenshot
      .captureToFile({})
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(null);
  });

  it('should call return null when navigator.screenshot is undefined when capturing to dataURI', function() {

    navigator.screenshot = undefined;

    $cordovaScreenshot
      .captureToUri({})
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(null);
  });
 
});
