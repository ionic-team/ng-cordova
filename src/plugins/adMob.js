// install  :     cordova plugin add com.google.cordova.admob
// link     :     https://github.com/floatinghotpot/cordova-admob-pro

angular.module('ngCordova.plugins.adMob', [])

  .factory('$cordovaAdMob', [function () {

    return {
      createBannerView: function (options, success, fail) {
        return window.plugins.AdMob.createBannerView(options, success, fail);
      },
      createInterstitialView: function (options, success, fail) {
        return window.plugins.AdMob.createInterstitialView(options, success, fail);
      },
      requestAd: function (options, success, fail) {
        return window.plugins.AdMob.requestAd(options, success, fail);
      },
      showAd: function (options, success, fail) {
        return window.plugins.AdMob.showAd(options, success, fail);
      },
      requestInterstitialAd: function (options, success, fail) {
        return window.plugins.AdMob.requestInterstitialAd(options, success, fail);
      }
    }
  }]);