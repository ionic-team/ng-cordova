System.register('ng-cordova/globalization', [], function (_export) {
  // install   :      cordova plugin add cordova-plugin-globalization
  // link      :      https://github.com/apache/cordova-plugin-globalization

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.globalization', []).factory('$cordovaGlobalization', ['$q', function ($q) {

        return {
          getPreferredLanguage: function getPreferredLanguage() {
            var q = $q.defer();

            navigator.globalization.getPreferredLanguage(function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            });
            return q.promise;
          },

          getLocaleName: function getLocaleName() {
            var q = $q.defer();

            navigator.globalization.getLocaleName(function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            });
            return q.promise;
          },

          getFirstDayOfWeek: function getFirstDayOfWeek() {
            var q = $q.defer();

            navigator.globalization.getFirstDayOfWeek(function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            });
            return q.promise;
          },

          // "date" parameter must be a JavaScript Date Object.
          dateToString: function dateToString(date, options) {
            var q = $q.defer();

            navigator.globalization.dateToString(date, function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            }, options);
            return q.promise;
          },

          stringToDate: function stringToDate(dateString, options) {
            var q = $q.defer();

            navigator.globalization.stringToDate(dateString, function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            }, options);
            return q.promise;
          },

          getDatePattern: function getDatePattern(options) {
            var q = $q.defer();

            navigator.globalization.getDatePattern(function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            }, options);
            return q.promise;
          },

          getDateNames: function getDateNames(options) {
            var q = $q.defer();

            navigator.globalization.getDateNames(function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            }, options);
            return q.promise;
          },

          // "date" parameter must be a JavaScript Date Object.
          isDayLightSavingsTime: function isDayLightSavingsTime(date) {
            var q = $q.defer();

            navigator.globalization.isDayLightSavingsTime(date, function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            });
            return q.promise;
          },

          numberToString: function numberToString(number, options) {
            var q = $q.defer();

            navigator.globalization.numberToString(number, function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            }, options);
            return q.promise;
          },

          stringToNumber: function stringToNumber(numberString, options) {
            var q = $q.defer();

            navigator.globalization.stringToNumber(numberString, function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            }, options);
            return q.promise;
          },

          getNumberPattern: function getNumberPattern(options) {
            var q = $q.defer();

            navigator.globalization.getNumberPattern(function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            }, options);
            return q.promise;
          },

          getCurrencyPattern: function getCurrencyPattern(currencyCode) {
            var q = $q.defer();

            navigator.globalization.getCurrencyPattern(currencyCode, function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            });
            return q.promise;
          }

        };
      }]);
    }
  };
});