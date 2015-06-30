System.register('ng-cordova/mMediaAds', [], function (_export) {
  // install  :     cordova plugin add https://github.com/floatinghotpot/cordova-plugin-mmedia.git
  // link     :     https://github.com/floatinghotpot/cordova-plugin-mmedia

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.mMediaAds', []).factory('$cordovaMMediaAds', ['$q', '$window', function ($q, $window) {

        return {
          setOptions: function setOptions(options) {
            var d = $q.defer();

            $window.mMedia.setOptions(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          createBanner: function createBanner(options) {
            var d = $q.defer();

            $window.mMedia.createBanner(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          removeBanner: function removeBanner() {
            var d = $q.defer();

            $window.mMedia.removeBanner(function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          showBanner: function showBanner(position) {
            var d = $q.defer();

            $window.mMedia.showBanner(position, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          showBannerAtXY: function showBannerAtXY(x, y) {
            var d = $q.defer();

            $window.mMedia.showBannerAtXY(x, y, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          hideBanner: function hideBanner() {
            var d = $q.defer();

            $window.mMedia.hideBanner(function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          prepareInterstitial: function prepareInterstitial(options) {
            var d = $q.defer();

            $window.mMedia.prepareInterstitial(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          showInterstitial: function showInterstitial() {
            var d = $q.defer();

            $window.mMedia.showInterstitial(function () {
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