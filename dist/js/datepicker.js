System.register('ng-cordova/datepicker', [], function (_export) {
  // install   :      cordova plugin add https://github.com/VitaliiBlagodir/cordova-plugin-datepicker.git
  // link      :      https://github.com/VitaliiBlagodir/cordova-plugin-datepicker

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.datePicker', []).factory('$cordovaDatePicker', ['$window', '$q', function ($window, $q) {
        return {
          show: function show(options) {
            var q = $q.defer();
            options = options || { date: new Date(), mode: 'date' };
            $window.datePicker.show(options, function (date) {
              q.resolve(date);
            });
            return q.promise;
          }
        };
      }]);
    }
  };
});