System.register('ng-cordova/toast', [], function (_export) {
  // install   :      cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
  // link      :      https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.toast', []).factory('$cordovaToast', ['$q', '$window', function ($q, $window) {

        return {
          showShortTop: function showShortTop(message) {
            var q = $q.defer();
            $window.plugins.toast.showShortTop(message, function (response) {
              q.resolve(response);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          showShortCenter: function showShortCenter(message) {
            var q = $q.defer();
            $window.plugins.toast.showShortCenter(message, function (response) {
              q.resolve(response);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          showShortBottom: function showShortBottom(message) {
            var q = $q.defer();
            $window.plugins.toast.showShortBottom(message, function (response) {
              q.resolve(response);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          showLongTop: function showLongTop(message) {
            var q = $q.defer();
            $window.plugins.toast.showLongTop(message, function (response) {
              q.resolve(response);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          showLongCenter: function showLongCenter(message) {
            var q = $q.defer();
            $window.plugins.toast.showLongCenter(message, function (response) {
              q.resolve(response);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          showLongBottom: function showLongBottom(message) {
            var q = $q.defer();
            $window.plugins.toast.showLongBottom(message, function (response) {
              q.resolve(response);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          show: function show(message, duration, position) {
            var q = $q.defer();
            $window.plugins.toast.show(message, duration, position, function (response) {
              q.resolve(response);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          }
        };
      }]);
    }
  };
});