describe('Service: $cordovaVibration', function() {

  var $cordovaVibration;

  beforeEach(module('ngCordova.plugins.vibration'));

  beforeEach(inject(function (_$cordovaVibration_) {
    $cordovaVibration = _$cordovaVibration_;

    navigator.notification = jasmine.createSpyObj('notification', ['vibrate', 'vibrateWithPattern', 'cancelVibration']);
  }));

  it('should call navigator\'s notification.vibrate method', function() {
    $cordovaVibration.vibrate(10);
    expect(navigator.notification.vibrate).toHaveBeenCalledWith(10);
  });

  it('should call navigator\'s notification.vibrateWithPattern method', function() {
    var pattern = [1, 5, 8];
    $cordovaVibration.vibrateWithPattern(pattern, true);
    expect(navigator.notification.vibrateWithPattern).toHaveBeenCalledWith(pattern, true);
  });

  it('should call navigator\'s notification.cancelVibration method', function() {
    $cordovaVibration.cancelVibration();
    expect(navigator.notification.cancelVibration).toHaveBeenCalled();
  });
});
