System.register('ng-cordova/sms', [], function (_export) {
  // install   :      cordova plugin add https://github.com/cordova-sms/cordova-sms-plugin.git
  // link      :      https://github.com/cordova-sms/cordova-sms-plugin

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.sms', []).factory('$cordovaSms', ['$q', function ($q) {

        return {
          send: function send(number, message, options) {
            var q = $q.defer();
            sms.send(number, message, options, function (res) {
              q.resolve(res);
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