// install   :   cordova -d plugin add /Users/your/path/here/phonegap-facebook-plugin --variable APP_ID="123456789" --variable APP_NAME="myApplication"
// link      :   https://github.com/Wizcorp/phonegap-facebook-plugin

angular.module('ngCordova.plugins.facebook', [])

  .provider('$cordovaFacebook', [function () {

    this.browserInit = function (id, version) {
      this.appID = id;
      this.appVersion = version || "v2.0";
      facebookConnectPlugin.browserInit(this.appID, this.appVersion);
    };

    this.$get = ['$q', function ($q) {

      return {
        login: function (permissions) {
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
