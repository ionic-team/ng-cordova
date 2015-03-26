/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaDatePicker
 *
 * @description
 * A service for testing datepicker features
 * in an app build with ngCordova.
 */
ngCordovaMocks.factory('$cordovaDatePicker', ['$q', function ($q) {
  return {
    show: function (options) {
      var q = $q.defer();
      options = options || {date: new Date(), mode: 'date'};
      q.resolve(options.date);
      return q.promise;
    }
  };
}]);
