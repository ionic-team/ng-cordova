describe('Service: $cordovaMarket', function() {

  var $cordovaMarket, $rootScope;

  beforeEach(module('ngCordova.plugins.market'));

  beforeEach(inject(function (_$cordovaMarket_, _$q_, _$rootScope_) {
    $cordovaMarket = _$cordovaMarket_;
    $rootScope = _$rootScope_;

    window.cordova.plugins.market = {
      open: angular.noop
    };
  }));

  it('should call window\'s cordova.plugins.market.open method', function() {
    var appId = "com.test.app_id";

    spyOn(window.cordova.plugins.market, 'open')
      .andCallFake(function (appId, successCb, errorCb) {
        successCb();
      });

    $cordovaMarket.open(appId);

    $rootScope.$digest();

    expect(window.cordova.plugins.market.open).toHaveBeenCalledWith(
      appId,
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call errorCb when in windows\'s cordova.plugins.market.open a error occurs', function() {
    var result;
    var appId = "com.test.app_id";

    spyOn(window.cordova.plugins.market, 'open')
      .andCallFake(function (appId, successCb, errorCb) {
        errorCb();
      });

    $cordovaMarket.open(appId)
      .then(angular.noop, function() {
        result = 'error occurs';
      });

    $rootScope.$digest();

    expect(result).toBe('error occurs');
  });
});
