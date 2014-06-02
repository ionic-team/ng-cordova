angular.module('ngCordova.plugins.camera', ['ngCordova.mocks'])

.factory('$cordovaCamera', ['$q', '$timeout', '$cordovaMockWhen', function($q, $timeout, $cordovaMockWhen) {

  var when = $cordovaMockWhen('$cordovaCamera');

  return {

    whenGetPicture: function(tag, data) {
      when.when(tag, data);
    },

    getPicture: function(tag, options) {
      var q = $q.defer();
      $timeout(function() {
        // Return any when value, if any
        q.resolve(when.check(tag));
      });
      return q.promise;
    }
  }
}]);
