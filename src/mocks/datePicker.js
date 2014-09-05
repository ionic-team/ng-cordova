/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaDatePicker
 *
 * @description
 * A service for testing datepicker features
 * in an app build with ngCordova.
 */
ngCordovaMocks.factory('$cordovaDatePicker', function () {
  return {
    show: function (options, fn) {
      return options.date;
    }
  };
});
