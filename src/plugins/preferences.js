// install   :
// link      :

angular.module('ngCordova.plugins.prefs', [])

  .factory('$cordovaPreferences', ['$window', '$q', function ($window, $q) {

    return {
      set: function (key, value) {
        var q = $q.defer();

        $window.appgiraffe.plugins.applicationPreferences.set(key, value, function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        });

        return q.promise;
      },

      get: function (key) {
        var q = $q.defer();

        $window.appgiraffe.plugins.applicationPreferences.get(key, function (value) {
          q.resolve(value);
        }, function (err) {
          q.reject(err);
        });

        return q.promise;
      }
    };
  }]);
