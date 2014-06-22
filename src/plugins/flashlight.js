angular.module('ngCordova.plugins.flashlight', [])

.factory('$cordovaFlashlight', ['$q', function ($q) {

    return {
      available: function () {
        var q = $q.defer();
        window.plugins.flashlight.available(function (isAvailable) {
          q.resolve(isAvailable);
        });
        return q.promise;
      },

      switchOn: function () {
        var q = $q.defer();
        window.plugins.flashlight.switchOn(function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error)
        });
        return q.promise;
      },

      switchOff: function () {
        var q = $q.defer();
        window.plugins.flashlight.switchOff(function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error)
        });
        return q.promise;
      }
    }
  }
]);