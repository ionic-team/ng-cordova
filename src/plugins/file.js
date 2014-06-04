angular.module('ngCordova.plugins.file', [])

.factory('File', ['$window', '$q', function ($window, $q) {

  return {
    requestFileSystem: function (type, size) {
      var q = $q.defer();
      
      $window.requestFileSystem(type, size,

        function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        }
      );

      return q.promise;
    }
  };

}]);
