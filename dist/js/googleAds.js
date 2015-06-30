System.register('ng-cordova/googleAds', [], function (_export) {
  // install  :     cordova plugin add https://github.com/floatinghotpot/cordova-admob-pro.git
  // link     :     https://github.com/floatinghotpot/cordova-admob-pro

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.googleAds', []).factory('$cordovaGoogleAds', ['$q', '$window', function ($q, $window) {

        return {
          setOptions: function setOptions(options) {
            var d = $q.defer();

            $window.AdMob.setOptions(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          createBanner: function createBanner(options) {
            var d = $q.defer();

            $window.AdMob.createBanner(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          removeBanner: function removeBanner() {
            var d = $q.defer();

            $window.AdMob.removeBanner(function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          showBanner: function showBanner(position) {
            var d = $q.defer();

            $window.AdMob.showBanner(position, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          showBannerAtXY: function showBannerAtXY(x, y) {
            var d = $q.defer();

            $window.AdMob.showBannerAtXY(x, y, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          hideBanner: function hideBanner() {
            var d = $q.defer();

            $window.AdMob.hideBanner(function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          prepareInterstitial: function prepareInterstitial(options) {
            var d = $q.defer();

            $window.AdMob.prepareInterstitial(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          showInterstitial: function showInterstitial() {
            var d = $q.defer();

            $window.AdMob.showInterstitial(function () {
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