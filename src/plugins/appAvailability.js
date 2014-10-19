// install  :     cordova plugin add https://github.com/ohh2ahh/AppAvailability.git
// link     :     https://github.com/ohh2ahh/AppAvailability

angular.module('ngCordova.plugins.appAvailability', [])

  .factory('$cordovaAppAvailability', ['$q', '$cordova', function ($q, $cordova) {

    return {
      check: function (urlScheme) {
        var q = $q.defer();
        $cordova.ready().then(function () {
          appAvailability.check(urlScheme, function (result) {
            q.resolve(result);
          }, function (err) {
            q.reject(err);
          });
        });

        return q.promise;
      }
    }
  }]);
