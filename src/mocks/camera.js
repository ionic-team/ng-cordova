angular.module('ngCordova.plugins.camera', [])

.factory('$cordovaCamera', ['$q', '$timeout', '$cordovaMocksWhen', function($q, $timeout, $cordovaMocksWhen) {

  var when = $cordovaMocksWhen('$cordovaCamera');

  return {

    whenGetPicture: function(tag, data) {
      when.when(tag, data);
    },

    getPicture: function(options, tag) {
      var q = $q.defer();
      $timeout(function() {
        // Return any when value, if any
        q.resolve(when.check(tag));
      });
      return q.promise;
    }
  }
});
