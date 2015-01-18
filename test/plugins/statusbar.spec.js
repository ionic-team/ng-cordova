describe('Service: $cordovaStatusbar', function () {

  var $cordovaStatusbar, $rootScope;

  var functionNames = [
    'overlaysWebView',
    'styleDefault',
    'styleLightContent',
    'styleLightContent',
    'styleBlackTranslucent',
    'styleBlackOpaque',
    'styleDefault',
    'backgroundColorByName',
    'backgroundColorByHexString',
    'hide',
    'show'
  ];

  beforeEach(module('ngCordova.plugins.statusbar'));

  beforeEach(inject(function (_$cordovaStatusbar_, _$q_, _$rootScope_) {
    $cordovaStatusbar = _$cordovaStatusbar_;
    $rootScope = _$rootScope_;

    window.StatusBar = {};

    for (var i = 0; i < functionNames.length; i++) {
      window.StatusBar[functionNames[i]] = jasmine.createSpy(functionNames[i]);
    }
  }));

  it('should call window\'s StatusBar.overlaysWebView method', function () {
    $cordovaStatusbar.overlaysWebView(false);
    expect(window.StatusBar.overlaysWebView).toHaveBeenCalledWith(false);
  });

  it('should call window\'s StatusBar.styleDefault method when style is called with 0', function () {
    $cordovaStatusbar.style(0);
    expect(window.StatusBar.styleDefault).toHaveBeenCalled();
  });

  it('should call window\'s StatusBar.styleBlackTranslucent method when style is called with 1', function () {
    $cordovaStatusbar.style(1);
    expect(window.StatusBar.styleLightContent).toHaveBeenCalled();
  });

  it('should call window\'s StatusBar.styleBlackTranslucent method when style is called with 2', function () {
    $cordovaStatusbar.style(2);
    expect(window.StatusBar.styleBlackTranslucent).toHaveBeenCalled();
  });

  it('should call window\'s StatusBar.styleBlackOpaque method when style is called with 3', function () {
    $cordovaStatusbar.style(3);
    expect(window.StatusBar.styleBlackOpaque).toHaveBeenCalled();
  });

  it('should call window\'s StatusBar.styleDefault method when style is called with no args', function () {
    $cordovaStatusbar.style();
    expect(window.StatusBar.styleDefault).toHaveBeenCalled();
  });

  it('should call window\'s StatusBar.backgroundColorByName method', function () {
    $cordovaStatusbar.styleColor('black');
    expect(window.StatusBar.backgroundColorByName).toHaveBeenCalledWith('black');
  });

  it('should call window\'s StatusBar.backgroundColorByHexString method', function () {
    $cordovaStatusbar.styleHex('#000');
    expect(window.StatusBar.backgroundColorByHexString).toHaveBeenCalledWith('#000');
  });

  angular.forEach(['show', 'hide'], function (fnName) {
    it('should call window\'s StatusBar.' + fnName + ' method', function () {
      $cordovaStatusbar[fnName]();
      expect(window.StatusBar[fnName]).toHaveBeenCalled();
    });
  });

});
