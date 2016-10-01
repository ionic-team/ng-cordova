
angular.module('ngCordova', [
  'ngCordova.plugins',
]).factory('deviceReady', function($q) {
  return function() {
    var defer = $q.defer();

    document.addEventListener('deviceready', function() {
      defer.resolve();
    });

    return defer.promise;
  };
});

;
