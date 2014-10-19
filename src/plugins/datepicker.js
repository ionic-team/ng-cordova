angular.module('ngCordova.plugins.datePicker', [])

  .factory('$cordovaDatePicker', ['$window', '$q', '$cordova', function ($window, $q, $cordova) {

    return {
      show: function (options) {
        var d = $q.defer();

        $cordova.ready().then(function () {
          $window.datePicker.show(options, function (date) {
            d.resolve(date);
          });
        });
        return d.promise;
      }
    }
  }]);
