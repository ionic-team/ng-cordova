// install  :     cordova plugin add https://github.com/floatinghotpot/cordova-plugin-facebookads.git
// link     :     https://github.com/floatinghotpot/cordova-plugin-facebookads

angular.module('ngCordova.plugins.facebookAds', [])
  .factory('$cordovaFacebookAds', ['$q', '$window', function ($q, $window) {

    return {
      setOptions: function (options) {
        var d = $q.defer();

        $window.FacebookAds.setOptions(options, d.resolve, d.reject);

        return d.promise;
      },

      createBanner: function (options) {
        var d = $q.defer();

        $window.FacebookAds.createBanner(options, d.resolve, d.reject);

        return d.promise;
      },

      removeBanner: function () {
        var d = $q.defer();

        $window.FacebookAds.removeBanner(d.resolve, d.reject);

        return d.promise;
      },

      showBanner: function (position) {
        var d = $q.defer();

        $window.FacebookAds.showBanner(position, d.resolve, d.reject);

        return d.promise;
      },

      showBannerAtXY: function (x, y) {
        var d = $q.defer();

        $window.FacebookAds.showBannerAtXY(x, y, d.resolve, d.reject);

        return d.promise;
      },

      hideBanner: function () {
        var d = $q.defer();

        $window.FacebookAds.hideBanner(d.resolve, d.reject);

        return d.promise;
      },

      prepareInterstitial: function (options) {
        var d = $q.defer();

        $window.FacebookAds.prepareInterstitial(options, d.resolve, d.reject);

        return d.promise;
      },

      showInterstitial: function () {
        var d = $q.defer();

        $window.FacebookAds.showInterstitial(d.resolve, d.reject);

        return d.promise;
      }
    };
  }]);
