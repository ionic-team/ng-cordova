System.register('ng-cordova/facebookAds', [], function (_export) {
  // install  :     cordova plugin add https://github.com/floatinghotpot/cordova-plugin-facebookads.git
  // link     :     https://github.com/floatinghotpot/cordova-plugin-facebookads

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.facebookAds', []).factory('$cordovaFacebookAds', ['$q', '$window', function ($q, $window) {

        return {
          setOptions: function setOptions(options) {
            var d = $q.defer();

            $window.FacebookAds.setOptions(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          createBanner: function createBanner(options) {
            var d = $q.defer();

            $window.FacebookAds.createBanner(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          removeBanner: function removeBanner() {
            var d = $q.defer();

            $window.FacebookAds.removeBanner(function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          showBanner: function showBanner(position) {
            var d = $q.defer();

            $window.FacebookAds.showBanner(position, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          showBannerAtXY: function showBannerAtXY(x, y) {
            var d = $q.defer();

            $window.FacebookAds.showBannerAtXY(x, y, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          hideBanner: function hideBanner() {
            var d = $q.defer();

            $window.FacebookAds.hideBanner(function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          prepareInterstitial: function prepareInterstitial(options) {
            var d = $q.defer();

            $window.FacebookAds.prepareInterstitial(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          showInterstitial: function showInterstitial() {
            var d = $q.defer();

            $window.FacebookAds.showInterstitial(function () {
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