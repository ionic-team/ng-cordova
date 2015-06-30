System.register('ng-cordova/adMob', [], function (_export) {
  // install  :     cordova plugin add https://github.com/floatinghotpot/cordova-plugin-admob.git
  // link     :     https://github.com/floatinghotpot/cordova-plugin-admob

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.adMob', []).factory('$cordovaAdMob', ['$q', '$window', function ($q, $window) {

        return {
          createBannerView: function createBannerView(options) {
            var d = $q.defer();

            $window.plugins.AdMob.createBannerView(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          createInterstitialView: function createInterstitialView(options) {
            var d = $q.defer();

            $window.plugins.AdMob.createInterstitialView(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          requestAd: function requestAd(options) {
            var d = $q.defer();

            $window.plugins.AdMob.requestAd(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          showAd: function showAd(options) {
            var d = $q.defer();

            $window.plugins.AdMob.showAd(options, function () {
              d.resolve();
            }, function () {
              d.reject();
            });

            return d.promise;
          },

          requestInterstitialAd: function requestInterstitialAd(options) {
            var d = $q.defer();

            $window.plugins.AdMob.requestInterstitialAd(options, function () {
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