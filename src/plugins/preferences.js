// install   :
// link      :

angular.module('ngCordova.plugins.prefs', [])

  .factory('$cordovaPreferences', ['$window', '$q', '$cordova', function ($window, $q, $cordova) {

    return {
      set: function (key, value) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          $window.applicationPreferences.set(key, value, function (result) {
            q.resolve(result);
          }, function (err) {
            q.reject(err);
          });
        });

        return q.promise;
      },

      get: function (key) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          $window.applicationPreferences.get(key, function (value) {
            q.resolve(value);
          }, function (err) {
            q.reject(err);
          });
        });

        return q.promise;
      }
    };
  }]);
