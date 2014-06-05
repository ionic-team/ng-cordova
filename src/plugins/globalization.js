angular.module('ngCordova.plugins.globalization', [])

.factory('$cordovaGlobalization', ['$q', function ($q) {

  return {
    getPreferredLanguage: function (options) {
      var q = $q.defer();

      navigator.globalization.getPreferredLanguage(function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        });
      return q.promise;
    },

    getLocaleName: function (options) {
      var q = $q.defer();

      navigator.globalization.getLocaleName(function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        });
      return q.promise;
    },

    getFirstDayOfWeek: function (options) {
      var q = $q.defer();

      navigator.globalization.getFirstDayOfWeek(function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        });
      return q.promise;
    }

    //TODO:
    // dateToString
    // stringToDate
    // getDatePattern
    // getDateNames
    // isDayLightSavingsTime
    // numberToString
    // stringToNumber
    // getNumberPattern
    // getCurrencyPattern
  }

}]);
