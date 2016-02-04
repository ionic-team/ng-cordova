// install  :     cordova plugin add https://github.com/floatinghotpot/cordova-plugin-flurry.git
// link     :     https://github.com/floatinghotpot/cordova-plugin-flurry

angular.module('ngCordova.plugins.flurryAds', [])
  .factory('$cordovaFlurryAds', ['$q', '$window', function ($q, $window) {

    return {
      setOptions: function (options) {
        var d = $q.defer();

        $window.FlurryAds.setOptions(options, function () {
          d.resolve();
        }, function () {
          d.reject();
        });

        return d.promise;
      },

      createBanner: function (options) {
        var d = $q.defer();

        $window.FlurryAds.createBanner(options, function () {
          d.resolve();
        }, function () {
          d.reject();
        });

        return d.promise;
      },

      removeBanner: function () {
        var d = $q.defer();

        $window.FlurryAds.removeBanner(function () {
          d.resolve();
        }, function () {
          d.reject();
        });

        return d.promise;
      },

      showBanner: function (position) {
        var d = $q.defer();

        $window.FlurryAds.showBanner(position, function () {
          d.resolve();
        }, function () {
          d.reject();
        });

        return d.promise;
      },

      showBannerAtXY: function (x, y) {
        var d = $q.defer();

        $window.FlurryAds.showBannerAtXY(x, y, function () {
          d.resolve();
        }, function () {
          d.reject();
        });

        return d.promise;
      },

      hideBanner: function () {
        var d = $q.defer();

        $window.FlurryAds.hideBanner(function () {
          d.resolve();
        }, function () {
          d.reject();
        });

        return d.promise;
      },

      prepareInterstitial: function (options) {
        var d = $q.defer();

        $window.FlurryAds.prepareInterstitial(options, function () {
          d.resolve();
        }, function () {
          d.reject();
        });

        return d.promise;
      },

      showInterstitial: function () {
        var d = $q.defer();

        $window.FlurryAds.showInterstitial(function () {
          d.resolve();
        }, function () {
          d.reject();
        });

        return d.promise;
      }
    };
  }]);
