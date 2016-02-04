describe('Service: $cordovaSplashscreen', function() {

  var $cordovaSplashscreen;

  beforeEach(module('ngCordova.plugins.splashscreen'));

  beforeEach(inject(function (_$cordovaSplashscreen_) {
    $cordovaSplashscreen = _$cordovaSplashscreen_;

    navigator.splashscreen = jasmine.createSpyObj('splashscreen', ['hide', 'show']);
  }));

  it('should call navigator\'s splashscreen.hide', function() {
    $cordovaSplashscreen.hide();
    expect(navigator.splashscreen.hide).toHaveBeenCalled();
  });

  it('should call navigator\'s splashscreen.show', function() {
    $cordovaSplashscreen.show();
    expect(navigator.splashscreen.show).toHaveBeenCalled();
  });

});
