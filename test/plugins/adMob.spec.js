describe('Service: $cordovaAdMob', function() {

  var $cordovaAdMob, $rootScope;

  var functionNames = [
    'createBannerView',
    'createInterstitialView',
    'requestAd',
    'showAd',
    'requestInterstitialAd'
  ];

  beforeEach(module('ngCordova.plugins.adMob'));

  beforeEach(inject(function (_$cordovaAdMob_, _$rootScope_) {
    $cordovaAdMob = _$cordovaAdMob_;
    $rootScope = _$rootScope_;

    window.plugins = {
      AdMob: {}
    };

    for (var i = 0; i < functionNames.length; i++) {
      window.plugins.AdMob[functionNames[i]] = angular.noop;
    }
  }));

  for (var i = 0; i < functionNames.length; i++) {
    (function (fnName) {

      it('should call window\'s plugins.AdMob.' + fnName + ' method', function() {

        var options = { someOption: 1 };

        spyOn(window.plugins.AdMob, fnName)
          .and.callFake(function (options, successCb, errorCb) {
            successCb();
          });

        $cordovaAdMob[fnName](options);
        $rootScope.$digest();

        expect(window.plugins.AdMob[fnName]).toHaveBeenCalledWith(
          options,
          jasmine.any(Function),
          jasmine.any(Function)
        );
      });

      it('should call errorCb when in window\'s plugins.AdMob.' + fnName + ' a error orccurs', function() {

        var result;
        var options = { someOption: 1 };

        spyOn(window.plugins.AdMob, fnName)
          .and.callFake(function (options, successCb, errorCb) {
            errorCb();
          });

        $cordovaAdMob[fnName](options)
          .then(angular.noop, function () {
            result = 'error orccurs';
          });

        $rootScope.$digest();

        expect(result).toBe('error orccurs');
      });

    })(functionNames[i]);
  }
});
