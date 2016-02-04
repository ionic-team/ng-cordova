describe('Service: $cordovaKeyboard', function() {

  var $cordovaKeyboard;

  beforeEach(module('ngCordova.plugins.keyboard'));

  beforeEach(inject(function (_$cordovaKeyboard_) {
    $cordovaKeyboard = _$cordovaKeyboard_;

    window.cordova = {
      plugins: {
        Keyboard: {
          hideKeyboardAccessoryBar: jasmine.createSpy('hideAccessoryBar'),
          close: jasmine.createSpy('close'),
          disableScroll: jasmine.createSpy('disableScroll'),
          isVisible: null
        }
      }
    }
  }));

  it('should call window.cordova.plugins\'s Keyboard.hideKeyboardAccessoryBar', function() {
    $cordovaKeyboard.hideAccessoryBar(true);
    expect(window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar).toHaveBeenCalledWith(true);
  });

  it('should call window.cordova.plugins\'s Keyboard.close', function() {
    $cordovaKeyboard.close();
    expect(window.cordova.plugins.Keyboard.close).toHaveBeenCalled();
  });

  it('should call window.cordova.plugins\'s Keyboard.disableScroll', function() {
    $cordovaKeyboard.disableScroll(false);
    expect(window.cordova.plugins.Keyboard.disableScroll).toHaveBeenCalledWith(false);
  });

  it('should call window.cordova.plugins\'s Keyboard.close', function() {
    window.cordova.plugins.Keyboard.isVisible = false;
    expect($cordovaKeyboard.isVisible()).toBe(false);
  });

});
