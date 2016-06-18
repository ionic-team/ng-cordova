// install   :      cordova plugin add cordova-plugin-x-toast
// link      :      https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin

angular.module('ngCordova.plugins.toast', [])

  .factory('$cordovaToast', ['$q', '$window', function ($q, $window) {

    return {
      showShortTop: function (message) {
        var q = $q.defer();
        if(!$window.plugins || !$window.plugins.toast) {
          console.error('The toast plugin is not installed');
          return q.reject('The toast plugin is not installed');
        }

        $window.plugins.toast.showShortTop(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      showShortCenter: function (message) {
        var q = $q.defer();
        if(!$window.plugins || !$window.plugins.toast) {
          console.error('The toast plugin is not installed');
          return q.reject('The toast plugin is not installed');
        }

        $window.plugins.toast.showShortCenter(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      showShortBottom: function (message) {
        var q = $q.defer();
        if(!$window.plugins || !$window.plugins.toast) {
          console.error('The toast plugin is not installed');
          return q.reject('The toast plugin is not installed');
        }

        $window.plugins.toast.showShortBottom(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      showLongTop: function (message) {
        var q = $q.defer();
        if(!$window.plugins || !$window.plugins.toast) {
          console.error('The toast plugin is not installed');
          return q.reject('The toast plugin is not installed');
        }

        $window.plugins.toast.showLongTop(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      showLongCenter: function (message) {
        var q = $q.defer();
        if(!$window.plugins || !$window.plugins.toast) {
          console.error('The toast plugin is not installed');
          return q.reject('The toast plugin is not installed');
        }

        $window.plugins.toast.showLongCenter(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      showLongBottom: function (message) {
        var q = $q.defer();
        if(!$window.plugins || !$window.plugins.toast) {
          console.error('The toast plugin is not installed');
          return q.reject('The toast plugin is not installed');
        }

        $window.plugins.toast.showLongBottom(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      showWithOptions: function (message, duration, position, styling) {
        var q = $q.defer();
        if(!$window.plugins || !$window.plugins.toast) {
          console.error('The toast plugin is not installed');
          return q.reject('The toast plugin is not installed');
        }

        $window.plugins.toast.showWithOptions({
          message: message,
          duration: duration,
          position: position,
          styling: styling
        }, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      show: function (message, duration, position) {
        var q = $q.defer();
        if(!$window.plugins || !$window.plugins.toast) {
          console.error('The toast plugin is not installed');
          return q.reject('The toast plugin is not installed');
        }

        $window.plugins.toast.show(message, duration, position, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      hide: function () {
        var q = $q.defer();
        if(!$window.plugins || !$window.plugins.toast) {
          console.error('The toast plugin is not installed');
          return q.reject('The toast plugin is not installed');
        }
        try {
          $window.plugins.toast.hide();
          q.resolve();
        } catch (error) {
          q.reject(error && error.message);
        }
        return q.promise;
      }
    };

  }]);
