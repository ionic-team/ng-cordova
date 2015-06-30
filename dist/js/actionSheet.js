System.register('ng-cordova/actionSheet', [], function (_export) {
  // install  :     cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-actionsheet.git
  // link     :     https://github.com/EddyVerbruggen/cordova-plugin-actionsheet

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.actionSheet', []).factory('$cordovaActionSheet', ['$q', '$window', function ($q, $window) {

        return {
          show: function show(options) {
            var q = $q.defer();

            $window.plugins.actionsheet.show(options, function (result) {
              q.resolve(result);
            });

            return q.promise;
          },

          hide: function hide() {
            return $window.plugins.actionsheet.hide();
          }
        };
      }]);
    }
  };
});