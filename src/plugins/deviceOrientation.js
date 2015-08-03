// install   :     cordova plugin add cordova-plugin-device-orientation
// link      :     https://github.com/apache/cordova-plugin-device-orientation

angular.module('ngCordova.plugins.deviceOrientation', [])

  .factory('$cordovaDeviceOrientation', ['$q', function ($q) {

    var defaultOptions = {
      frequency: 3000 // every 3s
    };
    
    return {
      getCurrentHeading: function () {
        var q = $q.defer();

        if(!navigator.compass) {
            q.reject('No compass on Device');
            return q.promise;
        }

        navigator.compass.getCurrentHeading(function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        });

        return q.promise;
      },

      watchHeading: function (options) {
        var q = $q.defer();

        if(!navigator.compass) {
            q.reject('No compass on Device');
            return q.promise;
        }

        var _options = angular.extend(defaultOptions, options);
        var watchID = navigator.compass.watchHeading(function (result) {
          q.notify(result);
        }, function (err) {
          q.reject(err);
        }, _options);

        q.promise.cancel = function () {
          navigator.compass.clearWatch(watchID);
        };

        q.promise.clearWatch = function (id) {
          navigator.compass.clearWatch(id || watchID);
        };

        q.promise.watchID = watchID;

        return q.promise;
      },

      clearWatch: function (watchID) {
        return navigator.compass.clearWatch(watchID);
      }
    };
  }]);
