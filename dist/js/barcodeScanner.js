System.register('ng-cordova/barcodeScanner', [], function (_export) {
  // install  :    cordova plugin add https://github.com/wildabeast/BarcodeScanner.git
  // link     :    https://github.com/wildabeast/BarcodeScanner

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.barcodeScanner', []).factory('$cordovaBarcodeScanner', ['$q', function ($q) {

        return {
          scan: function scan(config) {
            var q = $q.defer();

            cordova.plugins.barcodeScanner.scan(function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            }, config);

            return q.promise;
          },

          encode: function encode(type, data) {
            var q = $q.defer();
            type = type || 'TEXT_TYPE';

            cordova.plugins.barcodeScanner.encode(type, data, function (result) {
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