System.register('ng-cordova/spinnerDialog', [], function (_export) {
  // install   :       cordova plugin add https://github.com/Paldom/SpinnerDialog.git
  // link      :       https://github.com/Paldom/SpinnerDialog

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.spinnerDialog', []).factory('$cordovaSpinnerDialog', ['$window', function ($window) {

        return {
          show: function show(title, message, fixed) {
            fixed = fixed || false;
            return $window.plugins.spinnerDialog.show(title, message, fixed);
          },
          hide: function hide() {
            return $window.plugins.spinnerDialog.hide();
          }
        };
      }]);
    }
  };
});