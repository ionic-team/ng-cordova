// install   :   cordova -d plugin add /Users/your/path/here/phonegap-facebook-plugin --variable APP_ID="123456789" --variable APP_NAME="myApplication"
// link      :   https://github.com/Wizcorp/phonegap-facebook-plugin

angular.module('ngCordova.plugins.facebook', [])

  .provider('$cordovaFacebook', [function () {
    var appID;
    var appVersion;

    this.setAppID = function (id, version) {
      appID = id;
      appVersion = version || "v2.0";
    };

    this.$get = ['$q', '$window', function ($q, $window) {
      return {
        getAppID: function () {
          return appID;
        },

        init: function (appID) {
          if (!$window.cordova) {
            facebookConnectPlugin.browserInit(appID, appVersion);
          }
        },

        login: function (permissions) {
          this.init(this.getAppID());

          var q = $q.defer();
          facebookConnectPlugin.login(permissions, q.resolve, q.reject);

          return q.promise;
        },

        showDialog: function (options) {
          var q = $q.defer();
          facebookConnectPlugin.showDialog(options, q.resolve, q.reject);

          return q.promise;
        },

        api: function (path, permissions) {
          var q = $q.defer();
          facebookConnectPlugin.api(path, permissions, q.resolve, q.reject);

          return q.promise;
        },

        getAccessToken: function () {
          var q = $q.defer();
          facebookConnectPlugin.getAccessToken(q.resolve, q.reject);

          return q.promise;
        },

        getLoginStatus: function () {
          var q = $q.defer();
          facebookConnectPlugin.getLoginStatus(q.resolve, q.reject);

          return q.promise;
        },

        logout: function () {
          var q = $q.defer();
          facebookConnectPlugin.logout(q.resolve, q.reject);

          return q.promise;
        }
      };
    }];
  }]);
