System.register('ng-cordova/iAd', [], function (_export) {
  // install  :     cordova plugin add https://github.com/floatinghotpot/cordova-plugin-iad.git
  // link     :     https://github.com/floatinghotpot/cordova-plugin-iad

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.iAd', []).factory('$cordovaiAd', ['$q', '$window', function ($q, $window) {

        return {
          setOptions: function setOptions(options) {
            var d = $q.defer();

            $window.iAd.setOptions(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          createBanner: function createBanner(options) {
            var d = $q.defer();

            $window.iAd.createBanner(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          removeBanner: function removeBanner() {
            var d = $q.defer();

            $window.iAd.removeBanner(function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          showBanner: function showBanner(position) {
            var d = $q.defer();

            $window.iAd.showBanner(position, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          showBannerAtXY: function showBannerAtXY(x, y) {
            var d = $q.defer();

            $window.iAd.showBannerAtXY(x, y, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          hideBanner: function hideBanner() {
            var d = $q.defer();

            $window.iAd.hideBanner(function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          prepareInterstitial: function prepareInterstitial(options) {
            var d = $q.defer();

            $window.iAd.prepareInterstitial(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          showInterstitial: function showInterstitial() {
            var d = $q.defer();

            $window.iAd.showInterstitial(function () {
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