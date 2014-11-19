// install   :     cordova plugin add org.apache.cordova.inappbrowser
// link      :     https://github.com/apache/cordova-plugin-inappbrowser/blob/master/doc/index.md

angular.module('ngCordova.plugins.inAppBrowser', [])

  .factory('$cordovaInAppBrowser', ['$rootScope', '$q', '$window', function ($rootScope, $q, $window) {

    var win, options;
    var scope = $rootScope.$new();

    return {
      init: function (config) {
        if (angular.isObject(config)) {
          var opt = [];
          for (var i in config) {
            opt.push([i + '=' + config[i]]);
          }
          options = opt.join();
        } else {
          options = config;
        }

        return scope;
      },

      open: function (url, target) {
        var q = $q.defer();

        win = $window.open(url, target, options);

        win.addEventListener('loadstart', function (event) {
          scope.$emit('loadstart', event);
        }, false);

        win.addEventListener('loadstop', function (event) {
          q.resolve(event);
          scope.$emit('loadstop', event);
        }, false);

        win.addEventListener('loaderror', function (event) {
          q.reject(event);
          scope.$emit('loaderror', event);
        }, false);

        win.addEventListener('exit', function (event) {
          scope.$emit('exit', event);
        }, false);

        return q.promise;
      },

      close: function () {
        win.close();
      },

      executeScript: function (details) {
        var q = $q.defer();

        win.executeScript(details, function (result) {
          q.resolve(result);
        });

        return q.promise;
      },

      insertCSS: function (details) {
        var q = $q.defer();

        win.insertCSS(details, function (result) {
          q.resolve(result);
        });

        return q.promise;
      }
    };

  }]);
