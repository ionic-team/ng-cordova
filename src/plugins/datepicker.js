angular.module('ngCordova.plugins.datePicker', [])

  .factory('$cordovaDatePicker', ['$window', '$q', 'cordovaReady', function ($window, $q, cordovaReady) {

    return {
      show: cordovaReady(function (options) {
        options = options || {date: new Date(), mode: 'date'};

        var d = $q.defer();

        $window.datePicker.show(options, function (date) {
          d.resolve(date);
        });

        return d.promise;
      })
    };
  }]);
