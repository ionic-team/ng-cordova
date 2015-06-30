System.register('ng-cordova/geolocation', [], function (_export) {
  // install   :     cordova plugin add cordova-plugin-geolocation
  // link      :     https://github.com/apache/cordova-plugin-geolocation

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.geolocation', []).factory('$cordovaGeolocation', ['$q', function ($q) {

        return {
          getCurrentPosition: function getCurrentPosition(options) {
            var q = $q.defer();

            navigator.geolocation.getCurrentPosition(function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            }, options);

            return q.promise;
          },

          watchPosition: function watchPosition(options) {
            var q = $q.defer();

            var watchID = navigator.geolocation.watchPosition(function (result) {
              q.notify(result);
            }, function (err) {
              q.reject(err);
            }, options);

            q.promise.cancel = function () {
              navigator.geolocation.clearWatch(watchID);
            };

            q.promise.clearWatch = function (id) {
              navigator.geolocation.clearWatch(id || watchID);
            };

            q.promise.watchID = watchID;

            return q.promise;
          },

          clearWatch: function clearWatch(watchID) {
            return navigator.geolocation.clearWatch(watchID);
          }
        };
      }]);
    }
  };
});