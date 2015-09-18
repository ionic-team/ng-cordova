describe('Service: $cordovaNavigationbar', function () {

  var $cordovaNavigationbar, $rootScope;

  var functionNames = [
    'backgroundColorByHexString'
  ];

  beforeEach(module('ngCordova.plugins.NavigationBar'));

  beforeEach(inject(function (_$cordovaNavigationbar_, _$q_, _$rootScope_) {
    $cordovaNavigationbar = _$cordovaNavigationbar_;
    $rootScope = _$rootScope_;

    window.NavigationBar = {};

    for (var i = 0; i < functionNames.length; i++) {
      window.NavigationBar[functionNames[i]] = jasmine.createSpy(functionNames[i]);
    }
  }));

  it('should call window\'s NavigationBar.backgroundColorByHexString method', function () {
    $cordovaNavigationbar.styleHex('#000');
    expect(window.NavigationBar.backgroundColorByHexString).toHaveBeenCalledWith('#000');
  });

  angular.forEach(['show', 'hide'], function (fnName) {
    it('should call window\'s NavigationBar.' + fnName + ' method', function () {
      $cordovaNavigationbar[fnName]();
      expect(window.NavigationBar[fnName]).toHaveBeenCalled();
    });
  });

});
