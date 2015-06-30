System.register('ng-cordova/mopubAds', [], function (_export) {
  // install  :     cordova plugin add https://github.com/floatinghotpot/cordova-plugin-mopub.git
  // link     :     https://github.com/floatinghotpot/cordova-plugin-mopub

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.mopubAds', []).factory('$cordovaMoPubAds', ['$q', '$window', function ($q, $window) {

        return {
          setOptions: function setOptions(options) {
            var d = $q.defer();

            $window.MoPub.setOptions(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          createBanner: function createBanner(options) {
            var d = $q.defer();

            $window.MoPub.createBanner(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          removeBanner: function removeBanner() {
            var d = $q.defer();

            $window.MoPub.removeBanner(function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          showBanner: function showBanner(position) {
            var d = $q.defer();

            $window.MoPub.showBanner(position, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          showBannerAtXY: function showBannerAtXY(x, y) {
            var d = $q.defer();

            $window.MoPub.showBannerAtXY(x, y, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          hideBanner: function hideBanner() {
            var d = $q.defer();

            $window.MoPub.hideBanner(function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          prepareInterstitial: function prepareInterstitial(options) {
            var d = $q.defer();

            $window.MoPub.prepareInterstitial(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          showInterstitial: function showInterstitial() {
            var d = $q.defer();

            $window.MoPub.showInterstitial(function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          }
        };
      }]);
    }
  };
});