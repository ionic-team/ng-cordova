// install   :   cordova -d plugin add /Users/your/path/here/phonegap-facebook-plugin --variable APP_ID="123456789" --variable APP_NAME="myApplication"
// link      :   https://github.com/Wizcorp/phonegap-facebook-plugin

'use strict';
angular.module('ngCordova.plugins.facebook', [])
  .provider('$cordovaFacebook', [

    function () {
      var appID = undefined;
      var appVersion = undefined;

      this.setAppID = function (id, version) {
        appID = id;
        appVersion = version || "v2.0";
      };

      this.$get = ['$q',
        function ($q) {
          return {
            getAppID: function () {
              return appID;
            },

            init: function (appID) {
              if (!window.cordova) {
                facebookConnectPlugin.browserInit(appID, appVersion);
              }
            },

            login: function (permissions) {
              this.init(this.getAppID());

              var q = $q.defer();
              facebookConnectPlugin.login(permissions,
                function (res) {
                  q.resolve(res);
                }, function (res) {
                  q.reject(res);
                });

              return q.promise;
            },

            showDialog: function (options) {

              var q = $q.defer();
              facebookConnectPlugin.showDialog(options,
                function (res) {
                  q.resolve(res);
                },
                function (err) {
                  q.reject(err);
                });

              return q.promise;
            },

            api: function (path, permissions) {
              var q = $q.defer();

              facebookConnectPlugin.api(path, permissions,
                function (res) {
                  q.resolve(res);
                },
                function (err) {
                  q.reject(err);
                });

              return q.promise;
            },

            getAccessToken: function () {
              var q = $q.defer();
              facebookConnectPlugin.getAccessToken(function (res) {
                  q.resolve(res);
                },
                function (err) {
                  q.reject(err);
                });

              return q.promise;
            },

            getLoginStatus: function () {
              var q = $q.defer();
              facebookConnectPlugin.getLoginStatus(function (res) {
                  q.resolve(res);
                },
                function (err) {
                  q.reject(err);
                });

              return q.promise;
            },

            logout: function () {
              var q = $q.defer();
              facebookConnectPlugin.logout(function (res) {
                  q.resolve(res);
                },
                function (err) {
                  q.reject(err);
                });

              return q.promise;
            }
          };
        }];
    }
  ]);
