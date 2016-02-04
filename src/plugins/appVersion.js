// install   :     cordova plugin add https://github.com/whiteoctober/cordova-plugin-app-version.git
// link      :     https://github.com/whiteoctober/cordova-plugin-app-version

angular.module('ngCordova.plugins.appVersion', [])

  .factory('$cordovaAppVersion', ['$q', function ($q) {

    return {
      getAppName: function () {
        var q = $q.defer();
        cordova.getAppVersion.getAppName(function (name) {
          q.resolve(name);
        });

        return q.promise;
      },

      getPackageName: function () {
        var q = $q.defer();
        cordova.getAppVersion.getPackageName(function (package) {
          q.resolve(package);
        });

        return q.promise;
      },

      getVersionNumber: function () {
        var q = $q.defer();
        cordova.getAppVersion.getVersionNumber(function (version) {
          q.resolve(version);
        });

        return q.promise;
      },

      getVersionCode: function () {
        var q = $q.defer();
        cordova.getAppVersion.getVersionCode(function (code) {
          q.resolve(code);
        });

        return q.promise;
      }
    };
  }]);
