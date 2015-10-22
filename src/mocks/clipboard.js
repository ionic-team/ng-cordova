/**
 * @ngdoc service
 * @name ngCordovaMocks.clipboard
 *
 * @description
 * A service for testing Clipboard features
 * in an app build with ngCordova.
 **/
ngCordovaMocks.factory('$cordovaClipboard',  ['$q', function ($q) {
  return {

    copy: function () {
      var d = $q.defer();

      d.resolve();

      return d.promise;
    },

    paste: function () {
      var d = $q.defer();

      d.resolve();

      return d.promise;
    }

  };
}]);
