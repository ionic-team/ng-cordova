System.register('ng-cordova/deviceMotion', [], function (_export) {
  // install   :     cordova plugin add cordova-plugin-device-motion
  // link      :     https://github.com/apache/cordova-plugin-device-motion

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.deviceMotion', []).factory('$cordovaDeviceMotion', ['$q', function ($q) {

        return {
          getCurrentAcceleration: function getCurrentAcceleration() {
            var q = $q.defer();

            navigator.accelerometer.getCurrentAcceleration(function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            });

            return q.promise;
          },

          watchAcceleration: function watchAcceleration(options) {
            var q = $q.defer();

            var watchID = navigator.accelerometer.watchAcceleration(function (result) {
              q.notify(result);
            }, function (err) {
              q.reject(err);
            }, options);

            q.promise.cancel = function () {
              navigator.accelerometer.clearWatch(watchID);
            };

            q.promise.clearWatch = function (id) {
              navigator.accelerometer.clearWatch(id || watchID);
            };

            q.promise.watchID = watchID;

            return q.promise;
          },

          clearWatch: function clearWatch(watchID) {
            return navigator.accelerometer.clearWatch(watchID);
          }
        };
      }]);
    }
  };
});