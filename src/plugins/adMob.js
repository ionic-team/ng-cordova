// install  :     cordova plugin add com.google.cordova.admob
// link     :     https://github.com/floatinghotpot/cordova-admob-pro

angular.module('ngCordova.plugins.adMob', [])

  .factory('$cordovaAdMob', ['$q', '$window', function ($q, $window) {
    var AdMob = $window.plugins.AdMob;

    return {
      setOptions: function (options) {
        var d = $q.defer();

        AdMob.setOptions(options, function () {
          d.resolve();
        }, function () {
          d.reject();
        });

        return d.promise;
      },
      
      createBanner: function (args) {
        var d = $q.defer();

        AdMob.createBanner(args, function () {
          d.resolve();
        }, function () {
          d.reject();
        });

        return d.promise;
      },
      
      removeBanner: function () {
        var d = $q.defer();

        AdMob.removeBanner(function () {
          d.resolve();
        }, function () {
          d.reject();
        });

        return d.promise;
      },
      
      hideBanner: function () {
        var d = $q.defer();

        AdMob.hideBanner(function () {
          d.resolve();
        }, function () {
          d.reject();
        });

        return d.promise;
      },
      
      showBanner: function (position) {
        var d = $q.defer();

        AdMob.showBanner(position, function () {
          d.resolve();
        }, function () {
          d.reject();
        });

        return d.promise;
      },
      
      showBannerAtXY: function (x, y) {
        var d = $q.defer();

        AdMob.showBannerAtXY(x, y, function () {
          d.resolve();
        }, function () {
          d.reject();
        });

        return d.promise;
      },
      
      prepareInterstitial: function (args) {
        var d = $q.defer();

        AdMob.prepareInterstitial(args, function () {
          d.resolve();
        }, function () {
          d.reject();
        });

        return d.promise;
      },

      showInterstitial: function () {
        var d = $q.defer();

        AdMob.showInterstitial(function () {
          d.resolve();
        }, function () {
          d.reject();
        });

        return d.promise;
      }
    };
  }]);
