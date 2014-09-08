angular.module('ngCordova.plugins.datePicker', [])

  .factory('$cordovaDatePicker', ['$window', function ($window) {

    return {
      show: function(options, fn) {
        return $window.datePicker.show(options, fn);
      }
    }

  }]);
